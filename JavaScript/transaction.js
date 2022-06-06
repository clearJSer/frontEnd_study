/**
 * react 事务
 */
function perform(anyMethod, wrappers) {
    return function() {
        wrappers.forEach(wrapper => wrapper.initialize());
        anyMethod();
        wrappers.forEach(wrapper => wrapper.close())
    }
}

let newFn = perform(
  function () {
    console.log('say');
  },
  [
    {
      initialize() {
        console.log('wrapper1 before say');
      },
      close() {
        console.log('wrapper1 closed');
      },
    },
    {
      initialize() {
        console.log('wrapper2 before say');
      },
      close() {
        console.log('wrapper2 closed');
      },
    },
  ],
);
newFn()