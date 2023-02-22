import BackgroundHeader from '~/layouts/components/BackgroundHeader';

function HeaderProfile({ children }) {
  return (
    <div>
      <BackgroundHeader />
      <div>{children}</div>
    </div>
  );
}

export default HeaderProfile;
