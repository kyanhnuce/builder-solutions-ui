import Intro from '~/components/Intro';

function Profile() {
  console.log(<Intro />);
  return (
    <h1>
      <Intro profile />
    </h1>
  );
}

export default Profile;
