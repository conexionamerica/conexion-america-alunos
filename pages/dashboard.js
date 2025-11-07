import Head from 'next/head';
import { Box, Heading, Container, Text, Button, SimpleGrid, VStack, Icon } from '@chakra-ui/react';
import { useSession, useSessionContext } from '@supabase/auth-helpers-react';
import { FaCalendarAlt, FaBook, FaUserCircle } from 'react-icons/fa';
import { useRouter } from 'next/router';

export default function Dashboard() {
  const { isLoading, session } = useSessionContext();
  const router = useRouter();

  // Redirecionar se não estiver conectado
  if (!session && !isLoading) {
    router.push('/'); // Volta para a página de login
    return null;
  }

  // Simples componente de cartão para o painel
  const DashboardCard = ({ icon, title, text, color, href }) => (
    <VStack p={6} bg="white" rounded="lg" shadow="md" align="start" spacing={3}>
      <Icon as={icon} w={8} h={8} color={color} />
      <Heading as="h2" size="md">{title}</Heading>
      <Text fontSize="sm" color="gray.600">{text}</Text>
      <Button colorScheme={color.split('.')[0]} size="sm" as="a" href={href}>
        Acessar
      </Button>
    </VStack>
  );

  return (
    <Box bg="gray.50" minH="100vh">
      <Head>
        <title>Meu Painel</title>
      </Head>

      <Container maxW="container.lg" py={10}>
        <Heading as="h1" size="xl" mb={6} color="blue.800">
          Bem-vindo ao Portal do Aluno
        </Heading>

        <Text fontSize="lg" mb={8} color="gray.600">
            Aqui você tem acesso a todos os seus recursos de estudo.
        </Text>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          <DashboardCard
            icon={FaCalendarAlt}
            title="Agendar Aulas"
            text="Verifique a disponibilidade do seu professor e marque sua próxima aula online."
            color="teal.500"
            href="#"
          />
          <DashboardCard
            icon={FaBook}
            title="Meus Cursos"
            text="Acesse materiais, exercícios e vídeos complementares das suas aulas."
            color="purple.500"
            href="#"
          />
          <DashboardCard
            icon={FaUserCircle}
            title="Editar Perfil"
            text="Atualize suas informações pessoais e gerencie sua senha."
            color="orange.500"
            href="#"
          />
        </SimpleGrid>

        <Box mt={10} textAlign="center">
            <Button onClick={() => supabase.auth.signOut()} colorScheme="red" variant="outline">
                Sair (Logout)
            </Button>
        </Box>

      </Container>
    </Box>
  );
}
