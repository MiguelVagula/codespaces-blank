import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView 
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Bem-vindo!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Passo 1: Tente isso</ThemedText>
        <ThemedText>
          Edite <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> Para ver as mudanças. Aperte{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({ ios: 'cmd + d', android: 'cmd + m' })}
          </ThemedText>{' '}
          para abrir as ferramentas de desenvolvedor.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Passo 2: Explore</ThemedText>
        <ThemedText>
          Toque na guia Explore para saber mais sobre o que está incluído neste aplicativo inicial.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Passo 3: Começar denovo</ThemedText>
        <ThemedText>
          Quando estiver pronto, inicie{' '}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> para obter um novo{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> diretorio. Isso moverá o seu atual{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> para{' '}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
