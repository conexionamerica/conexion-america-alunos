import Head from 'next/head';
import { Box, Container, Heading, Flex, Text } from '@chakra-ui/react';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { useSessionContext } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/router';

export default function Login() {
  const { isLoading, session } = useSessionContext();
  const router = useRouter();

  // Si ya está conectado, lo enviamos al dashboard
  if (session) {
    router.push('/dashboard');
    return null;
  }

  // Si está cargando, muestra un texto
  if (isLoading) {
    return (
      <Flex minH="80vh" align="center" justify="center">
        <Text fontSize="xl">Carregando...</Text>
      </Flex>
    )
  }

  // Si no está cargando y no hay sesión, muestra el Login
  return (
    <Box>
      <Head>
        <title>Acesso de Alunos - Conexión América</title>
      </Head>

      <Flex minH="80vh" align="center" justify="center" bg="gray.50">
        <Container maxW="md" p={8} bg="white" rounded="xl" shadow="xl">
          <Heading as="h1" size="xl" textAlign="center" mb={6} color="blue.600">
            Acesso ao Portal
          </Heading>
          
          <Auth
            redirectTo="http://alunos.conexionamerica.com.br/dashboard"
            appearance={{ theme: ThemeSupa }}
            providers={['google']} // Permite login con Google
            view="sign_in"
          />
        </Container>
      </Flex>
    </Box>
  );
}
