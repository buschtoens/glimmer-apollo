import { DEBUG } from '@glimmer/env';
export { tracked } from '@glimmer/tracking';

import type { IWaitForPromise } from './-private/types';
import type {
  getOwner as IGetOwner,
  setOwner as ISetOwner
} from '@glimmer/owner';

import type {
  setHelperManager as ISetHelperManager,
  helperCapabilities as IHelperCapabilities
} from '@glimmer/manager';

import type {
  isDestroying as IIsDestroying,
  isDestroyed as IIsDestroyed,
  destroy as IDestroy,
  registerDestructor as IRegisterDestructor,
  associateDestroyableChild as IAssociateDestroyableChild
} from '@glimmer/destroyable';

import type { invokeHelper as IInvokeHelper } from '@glimmer/runtime';

import type {
  getValue as IGetValue,
  createCache as ICreateCache
} from '@glimmer/validator';

interface EnviromentContext {
  setOwner: typeof ISetOwner;
  getOwner: typeof IGetOwner;
  getValue: typeof IGetValue;
  createCache: typeof ICreateCache;
  invokeHelper: typeof IInvokeHelper;
  isDestroying: typeof IIsDestroying;
  isDestroyed: typeof IIsDestroyed;
  destroy: typeof IDestroy;
  registerDestructor: typeof IRegisterDestructor;
  associateDestroyableChild: typeof IAssociateDestroyableChild;
  waitForPromise: typeof IWaitForPromise;
  setHelperManager: typeof ISetHelperManager;
  helperCapabilities: typeof IHelperCapabilities;
}

export let getOwner: EnviromentContext['getOwner'];
export let setOwner: EnviromentContext['setOwner'];
export let createCache: EnviromentContext['createCache'];
export let getValue: EnviromentContext['getValue'];
export let invokeHelper: EnviromentContext['invokeHelper'];
export let isDestroyed: EnviromentContext['isDestroyed'];
export let isDestroying: EnviromentContext['isDestroying'];
export let destroy: EnviromentContext['destroy'];
export let registerDestructor: EnviromentContext['registerDestructor'];
export let associateDestroyableChild: EnviromentContext['associateDestroyableChild'];
export let waitForPromise: EnviromentContext['waitForPromise'];
export let setHelperManager: EnviromentContext['setHelperManager'];
export let helperCapabilities: EnviromentContext['helperCapabilities'];

let environmentContextWasSet = false;

export function setEnviromentContext(env: EnviromentContext): void {
  if (DEBUG) {
    if (environmentContextWasSet) {
      throw new Error(
        'Attempted to set the glimmer-apollo environment context twice. This should only be set once.'
      );
    }

    environmentContextWasSet = true;
  }

  setOwner = env.setOwner;
  getOwner = env.getOwner;
  createCache = env.createCache;
  getValue = env.getValue;
  invokeHelper = env.invokeHelper;
  waitForPromise = env.waitForPromise;
  setHelperManager = env.setHelperManager;
  helperCapabilities = env.helperCapabilities;

  isDestroying = env.isDestroying;
  isDestroyed = env.isDestroyed;
  destroy = env.destroy;
  registerDestructor = env.registerDestructor;
  associateDestroyableChild = env.associateDestroyableChild;
}
