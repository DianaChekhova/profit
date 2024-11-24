import Navigator from '../../navigator/navigator.jsx';
import Subscriptions from './sections/subscriptions/index.jsx';
import Group from './sections/group/index.jsx';
import Coaches from './sections/coaches/index.jsx';
import Contacts from './sections/contacts/index.jsx';

function MainPage() {
  return (
    <>
      <div style={{display: 'flex', gap: '15px', width: '100%', flexDirection: 'column', alignItems: 'center'}}>
        <Navigator />
        <Subscriptions />
        <Coaches />
        <Group />
        <Contacts />
      </div>
    </>
  );
}

export default MainPage;
