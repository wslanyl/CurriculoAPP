import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, StatusBar } from 'react-native';

// --- DADOS DO CURRÍCULO  ---
const userData = {
  name: "Wslany Lima",
  title: "Desenvolvedor Front-end & Mobile",
  // URL a sua foto (placeholder).
  photoUrl: "https://i.ibb.co/G31Fvkgg/IMG-4474.jpg",
  experiences: [
    {
      id: 1,
      title: "Dev Júnior",
      company: "Empresa Dio.me",
      years: "2025 - Atual",
    },
  ],
  
  skills: ['JavaScript', 'Mysql', 'CSS','GitHub', 'Figma', 'UI/UX Design'], 
  
  contact: "anawslanylima@gmail.com | (81) 98446-5239",

  // ⭐️ NOVO CAMPO: FORMAÇÃO ACADÊMICA E BOOTCAMPS
  education: [
    {
      id: 1,
      type: "GRADUAÇÃO DE TECNOLOGIA",
      course: "ANÁLISE E DESENVOLVIMENTO DE SISTEMAS (ADS)",
      institution: "Faculdade SENAC",
      details: "Cursando o 3º Período - Previsão de Conclusão: Dez/2026",
    },
    {
      id: 2,
      type: "BOOTCAMP DIO.ME",
      course: "Nexa - Fundamentos de IA Generativa com Bedrock",
      institution: "", 
      details: "(Em andamento)",
    },
    {
      id: 3,
      type: "BOOTCAMP DIO.ME",
      course: "Neo4J - Análise de Dados com Grafos",
      institution: "", 
      details: "(Em andamento)",
    },
  ],
};

// Componente para um item de experiência simples (usando View e Text)
const ExperienceItemSimple = ({ title, company, years }) => (
  <View style={experienceStyles.itemContainer}>
    <Text style={experienceStyles.title}>{title}</Text>
    <View style={experienceStyles.detailRow}>
        <Text style={experienceStyles.detailText}>{company}</Text>
        <Text style={experienceStyles.detailText}>{years}</Text>
    </View>
  </View>
);

// ⭐️ NOVO COMPONENTE: ITEM DE FORMAÇÃO
const EducationItemSimple = ({ course, type, institution, details }) => (
    <View style={styles.educationItem}>
        <Text style={styles.educationCourse}>{course}</Text> 
        <Text style={styles.educationInstitution}>
            {institution} {type}
        </Text>
        <Text style={styles.educationDetails}>{details}</Text>
    </View>
);



export default function App() {
  return (
    // ScrollView para permitir rolagem
    <View style={styles.container}>
      {/* Ajusta a área de visualização do StatusBar */}
      <StatusBar style="light" /> 
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        {/* --- CABEÇALHO --- */}
        <View style={styles.header}>
          <Image
            source={{ uri: userData.photoUrl }}
            style={styles.profileImage}
          />
          <Text style={styles.name}>{userData.name}</Text>
          <Text style={styles.title}>{userData.title}</Text>
          <Text style={styles.contact}>{userData.contact}</Text>
        </View>

        <View style={styles.mainContent}>
          
          {/* SEÇÃO DE EXPERIÊNCIA */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Experiência</Text>
            
            {userData.experiences.map(exp => (
              <ExperienceItemSimple 
                key={exp.id}
                title={exp.title}
                company={exp.company}
                years={exp.years}
              />
            ))}
          </View>

          {/* SEÇÃO DE HABILIDADES */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Habilidades</Text>
            <View style={styles.skillsContainer}>
              {userData.skills.map(skill => (
                <View 
                  key={skill} 
                  style={styles.skillTag}
                >
                  <Text style={styles.skillText}>
                    {skill}
                  </Text>
                </View>
              ))}
            </View>
          </View>
          
          {/* ⭐️ NOVA SEÇÃO: FORMAÇÃO ACADÊMICA */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>FORMAÇÃO ACADÊMICA</Text>
            
            {userData.education.map(edu => (
                <EducationItemSimple
                    key={edu.id}
                    course={edu.course}
                    type={edu.type}
                    institution={edu.institution}
                    details={edu.details}
                />
            ))}
          </View>
          
        </View>
      </ScrollView>
    </View>
  );
}

const COLORS = {
  primary: '#4F46E5', // Azul Índigo
  background: '#F3F4F6', // Cinza Claro
  text: '#1F2937', // Cinza Escuro
  cardBg: '#FFFFFF',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollContent: {
    paddingBottom: 20,
    alignItems: 'center',
  },
  header: {
    backgroundColor: COLORS.primary,
    width: '100%',
    paddingTop: 60, // Espaço para Status Bar
    paddingBottom: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
  },
  name: {
    fontSize: 28,
    fontWeight: '700',
    color: 'white',
  },
  title: {
    fontSize: 16,
    color: '#E0E7FF',
    marginBottom: 8,
  },
  contact: {
    fontSize: 14,
    color: '#C7D2FE',
  },
  mainContent: {
    width: '100%',
    maxWidth: 500, 
    paddingHorizontal: 20,
    marginTop: 20,
  },
  section: {
    backgroundColor: COLORS.cardBg,
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.text,
    borderBottomWidth: 2,
    borderBottomColor: COLORS.primary,
    paddingBottom: 5,
    marginBottom: 10,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 5,
  },
  skillTag: {
    backgroundColor: '#EEF2FF', // Indigo-100
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginRight: 8,
    marginBottom: 8,
  },
  skillText: {
    color: COLORS.primary,
    fontSize: 13,
    fontWeight: '500',
  },

  // ESTILOS FORMAÇÃO ACADÊMICA
  educationItem: {
    marginBottom: 20, 
    paddingLeft: 10,
    borderLeftWidth: 3, 
    borderLeftColor: '#4A3B9A', 
  },
  
  educationCourse: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 2,
  },
  
  educationInstitution: {
    fontSize: 14,
    color: '#333',
    marginBottom: 2,
  },
  
  educationDetails: {
    fontSize: 13,
    color: '#666',
    fontStyle: 'italic',
  },
});

const experienceStyles = StyleSheet.create({
  itemContainer: {
    marginBottom: 15,
    paddingLeft: 10,
    borderLeftWidth: 3,
    borderLeftColor: '#93C5FD', // Azul Claro
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.text,
    marginBottom: 2,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailText: {
    fontSize: 14,
    color: '#6B7280', // Cinza
  },
});