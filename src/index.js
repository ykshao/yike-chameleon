import chameleonImage from './components/chameleon-image';

const chameleonComponents = {
  chameleonImage,
}

const install = function (Vue, opts = {}) {
  Object.keys(chameleonComponents).forEach((key) => {
    Vue.component(key, chameleonComponents[key]);
  });
};

export default Object.assign(chameleonComponents, {
  install
});