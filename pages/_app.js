import { ChakraProvider } from '@chakra-ui/react'
import '../styles/globals.css' // Importa el CSS que acabamos de crear
import SupabaseProvider from '../components/SupabaseProvider' // Importa el Auth

// ¡Necesitamos un Navbar y Footer mínimos!
import { Box, Flex, Text } from '@chakra-ui/react';

const MinimalNavbar = () => (
  <Flex as="nav" p={4} bg="blue.600" color="white" justify="space-between">
    <Text fontWeight="bold">Portal de Alunos</Text>
  </Flex>
);

const MinimalFooter = () => (
  <Box as="footer" p={4} bg="gray.800" color="white" textAlign="center">
    <Text fontSize="sm">© {new Date().getFullYear()} Conexión América</Text>
  </Box>
);


function MyApp({ Component, pageProps }) {
  return (
    <SupabaseProvider> {/* 1. Inicia Supabase */}
      <ChakraProvider> {/* 2. Inicia el Diseño */}
        <MinimalNavbar />
        <Component {...pageProps} />
        <MinimalFooter />
      </ChakraProvider>
    </SupabaseProvider>
  )
}

export default MyApp
