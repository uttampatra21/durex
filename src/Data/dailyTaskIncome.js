let nv = 0;
const dailytask = () => {
  setTimeout(() => {
    nv += 10;
  }, 2000);
};

setTimeout(() => {
  dailytask();
}, 1000);

export default nv;
