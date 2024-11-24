import Navigator from '../../navigator/navigator.jsx';
import Subscriptions from './sections/subscriptions/index.jsx';
import Group from './sections/group/index.jsx';
import Coaches from './sections/coaches/index.jsx';
import Contacts from './sections/contacts/index.jsx';
import {useRef} from 'react';

function MainPage() {
  const ScrollToSubscriptions = () => {
    subsRef.current.scrollIntoView({behavior: 'smooth'});
  };
  const ScrollToCoaches = () => {
    coachRef.current.scrollIntoView({behavior: 'smooth'});
  };
  const ScrollToGroups = () => {
    groupRef.current.scrollIntoView({behavior: 'smooth'});
  };
  const ScrollToContacts = () => {
    contactsRef.current.scrollIntoView({behavior: 'smooth'});
  };
  const subsRef = useRef(null);
  const coachRef = useRef(null);
  const groupRef = useRef(null);
  const contactsRef = useRef(null);

  return (
    <>
      <div style={{display: 'flex', width: '100%', flexDirection: 'column', alignItems: 'center'}}>
        <Navigator
          ScrollToSubscriptions={ScrollToSubscriptions}
          ScrollToCoaches={ScrollToCoaches}
          ScrollToGroups={ScrollToGroups}
          ScrollToContacts={ScrollToContacts}
        />
        <Subscriptions ref={subsRef} />
        <Coaches ref={coachRef} />
        <Group ref={groupRef} />
        <Contacts ref={contactsRef} />
      </div>
    </>
  );
}

export default MainPage;
