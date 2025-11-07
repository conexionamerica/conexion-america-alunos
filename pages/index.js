import Head from 'next/head';
import { Box, Container, Heading, Flex, Button } from '@chakra-ui/react';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { useSession, useSessionContext } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/router';

export default function Login() {
  const { isLoading, session } = useSessionContext();
  const router = useRouter();

  // Redirigir si ya está conectado
  if (session) {
    router.push('/dashboard');
    return null;
  }

  // Mostrar carga mientras se verifica
  if (isLoading) {
      return (
          <Flex minH="100vh" align="center" justify="center">
              <Text fontSize="xl">Carregando...</Text>
          </Flex>
      )
  }


  return (
    <Box>
      <Head>
        <title>Acesso de Alunos</title>
      </Head>

      <Flex minH="100vh" align="center" justify="center" bg="gray.50">
        <Container maxW="md" p={8} bg="white" rounded="xl" shadow="xl">
          <Heading as="h1" size="xl" textAlign="center" mb={6} color="blue.600">
            Acesso ao Portal
          </Heading>

          {/* O componente de Login real */}
          <Auth
            redirectTo="http://alunos.conexionamerica.com.br/dashboard"
            appearance={{ theme: ThemeSupa }}
            providers={['google']} 
            view="sign_in" // Começa na vista de Login
          />
        </Container>
      </Flex>
    </Box>
  );
}
