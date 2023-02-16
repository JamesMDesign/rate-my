// function App() {

//     // this adds a new counter instance

//     const addCounter = () => {
//         changeCounters((prev) => [...prev, { id: counters.length + 1, count: 0 }]);
//     };

//     // this removes the last counter instance

//     const removeCounter = () => {
//         changeCounters((prev) => prev.slice(0, prev.length - 1));
//     };



//     const [counters, changeCounters] = useState([]);



//     const generateCounters = () => {
//         return counters.map((counter) => {
//             return (
//                 <TallyCounter id={counter.id} count={counter.count} key={counter.id}
//                     increaseCounter={() => increaseCounter(counter.id, true)}
//                     resetCounter={() => increaseCounter(counter.id, false)}
//                 />
//             );
//         });
//     };

//     // this increases the value of the counter (or likes)

//     const increaseCounter = (id, increment) => {
//         const updated = counters.map((counter) => {
//             if (counter.id === id) {
//                 if (increment) {
//                     return { id, count: counter.count + 1 };
//                 } else {
//                     return { id, count: 0 };
//                 }
//             }
//             return counter;
//         });
//         changeCounters(updated);
//     };


//     // this resets the value of all counters


//     const resetCounters = () => {
//         const reset = counters.map(counter => {
//             return { id: counter.id, count: 0 }
//         })
//         changeCounters(reset)
//     };


//     // this removes all counters


//     const removeAllCounters = () => {
//         changeCounters([])
//     }


//     // this is formatting it onto the webpage


//     return (
//         <div>
//             {generateCounters()}
//             <br />
//             <div>
//                 <button onClick={() => addCounter()}>add counter</button>
//                 <button onClick={() => removeCounter()}>remove counter</button>
//                 <button onClick={() => resetCounters()}>Reset ALL counters</button>
//                 <button onClick={() => removeAllCounters()}>Remove ALL counters</button>
//             </div>
//         </div>
//     );
// }

// export default App;