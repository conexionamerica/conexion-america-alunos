import Head from 'next/head';
import { Box, Container, Heading, Flex, Text } from '@chakra-ui/react';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { useSessionContext, useUser } from '@supabase/auth-helpers-react'; // <-- Importaciones Clave
import { useRouter } from 'next/router';

// Componente para manejar el estado de carga y sesión
function AuthContainer() {
  const { isLoading, session } = useSessionContext();
  const router = useRouter();

  // 1. Redirigir si ya está conectado
  if (session) {
    router.push('/dashboard');
    return null;
  }
  
  // 2. Mostrar carga mientras se verifica
  if (isLoading) {
      return (
          <Flex minH="100vh" align="center" justify="center">
              <Text fontSize="xl">Carregando a sessão...</Text>
          </Flex>
      );
  }

  // 3. Mostrar el componente de Login de Supabase
  return (
    <Container maxW="md" p={8} bg="white" rounded="xl" shadow="xl">
      <Heading as="h1" size="xl" textAlign="center" mb={6} color="blue.600">
        Acesso ao Portal
      </Heading>
      
      <Auth
        redirectTo="http://alunos.conexionamerica.com.br/dashboard"
        appearance={{ theme: ThemeSupa }}
        providers={['google']} 
        view="sign_in" 
      />
    </Container>
  );
}


export default function LoginPage() {
  return (
    <Box>
      <Head>
        <title>Acesso de Alunos</title>
      </Head>
      <Flex minH="100vh" align="center" justify="center" bg="gray.50">
        <AuthContainer />
      </Flex>
    </Box>
  );
}
