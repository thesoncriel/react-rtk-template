import { featureRoutes } from '@features/feat-routes';
import { BrowserRouter } from 'react-router-dom';
import {
  DeviceDetectProvider,
  renderRouteSystem,
  withAdaptiveRender,
} from 'ts-fe-toolkit';
import './App.css';

const Desktop = () => {
  return <div>데스크탑</div>;
};
const Tablet = () => {
  return <div>태블릿</div>;
};
const Mobile = () => {
  return <div>모바일</div>;
};

const Adapted = withAdaptiveRender({
  desktop: Desktop,
  tablet: Tablet,
  mobile: Mobile,
});

function App() {
  return (
    <DeviceDetectProvider>
      <BrowserRouter>
        <Adapted />
        {renderRouteSystem(featureRoutes)}
      </BrowserRouter>
    </DeviceDetectProvider>
  );
}

export default App;
