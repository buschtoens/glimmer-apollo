import Component from '@glimmer/component';
import gql from 'graphql-tag';
import { useQuery, useMutation } from 'glimmer-apollo';

const USER_INFO = gql`
  query GetUserInfo {
    user {
      username
      firstName
    }
  }
`;

const LOGIN = gql`
  mutation Login($username: String!) {
    login(username: $username) {
      id
      firstName
    }
  }
`;

export default class PlaygroundExperiment extends Component {
  userInfo = useQuery(this, () => [
    USER_INFO,
    {
      errorPolicy: 'all',
      notifyOnNetworkStatusChange: true
    }
  ]);

  login = useMutation(this, () => [
    LOGIN,
    {
      variables: {
        // username: 'non-existing'
      },
      errorPolicy: 'all'
    }
  ]);

  bla = (): void => {
    this.login.mutate();
  };
}
