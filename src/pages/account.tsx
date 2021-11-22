import Account from "../components/Account";

const AccountPage = (props) => {
  return (
    <div>
      <Account {...props} />
    </div>
  )
}

AccountPage.getInitialProps = Account.getInitialProps;

export default AccountPage
