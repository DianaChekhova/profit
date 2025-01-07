import {Box} from '@chakra-ui/react';
import {useContext, useEffect} from 'react';
import {useNavigate} from 'react-router-dom'; // Импортируем хук useNavigate
import {Context} from '../../../main.jsx';

function AdminPage() {
  const {store} = useContext(Context); // Доступ к контексту
  const navigate = useNavigate(); // Хук для навигации

  useEffect(() => {
    if (!store.getAuthenticated()) {
      navigate('/');
    }
  }, [navigate, store]);

  return (
    <Box
      width='100%'
      height='500px'
      display='flex'
      justifyContent='center'
      alignItems='center'
      padding='4'
      background='pink'
    >
      {/* Контент страницы администратора */}
    </Box>
  );
}

export default AdminPage;
