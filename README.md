# 📺 A flexible video component

## 🔥 Tecnologias usadas

- React ^19.0
- Tailwindcss ^4.0
- Tailwind Merge ^3.0
- Tailwind Variants ^0.3
- Lucide Icons ^0.477

## 🧠 Motivação

lorem ipsum...

## 📃 Como usar o componente
A seguir veja o passo a passo de como usar o componente e suas partes :p

### Como importar o componente

```javascript
import { Video, Controls, Settings } from '@video-component';
```

> Você pode precisar renomear os componentes, a depender de sua necessidade. Veja um exemplo:

```javascript
import {
  Video as VideoRoot,
  Controls as VideoControls,
  Settings as VideoSettings
} from '@video-component';
```

### Estrutura do componente

```jsx
  <Video.Container>
    <Video.Source 
      source={["https://video.mp4"]}
      fallback={
        <span>
          Cannot load this video :/
        </span>
      }
    />

    <Video.Tools>
      <Video.Timeline />

      <Controls.Container>

        <Settings.Container>

        </Settings.Container>
      </Controls.Container>
    </Video.Tools>
  </Video.Container>
```