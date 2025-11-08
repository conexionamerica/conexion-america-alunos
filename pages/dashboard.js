import Head from 'next/head'
import { Box, Heading, Text, Container, Button } from '@chakra-ui/react'
import { useSessionContext } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/router'

export default function Dashboard() {
  const { isLoading, session, supabaseClient } = useSessionContext();
  const router = useRouter();

  // Si está cargando, no muestra nada
  if (isLoading) return null;

  // Si no hay sesión (y no está cargando), lo echa al login
  if (!session) {
    router.push('/'); // Redirige a index.js (nuestro Login)
    return null;
  }

  // Si todo está bien, muestra el dashboard
  return (
    <Box>
      <Head>
        <title>Meu Painel - Conexión América</title>
      </Head>
      <Container py={20}>
        <Heading as="h1" size="xl">
          Bem-vindo ao seu painel!
        </Heading>
        <Text mt={4}>
          Seu e-mail é: {session.user.email}
        </Text>
        <Button 
          mt={8} 
          colorScheme="red" 
          onClick={() => supabaseClient.auth.signOut()}
        >
          Sair (Logout)
        </Button>
      </Container>
    </Box>
  )
}
