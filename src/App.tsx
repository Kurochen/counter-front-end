// import "./App.css";
// import { TonConnectButton } from "@tonconnect/ui-react";
// import { useMainContract } from "./hooks/useMainContract";
// import Telega from "./Telega";

// function App() {
//   const {
//     contract_address,
//     counter_value,
//     recent_sender,
//     owner_address,
//     contract_balance,
//   } = useMainContract();
//   return (
//     <div>
//       <div>
//         <Telega />
//       </div>
//       <div>
//         <TonConnectButton />
//       </div>

//       <div>
//         <div className="Card">
//           <b>Our contract Address</b>
//           <div className="Hint">{contract_address?.slice(0, 30) + "..."}</div>
//           <b>Our contract Balance</b>
//           <div className="Hint">{contract_balance}</div>
//         </div>

//         <div className="Card">
//           <b>Counter Value</b>
//           <div>{counter_value ?? "Loading..."}</div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

import "./App.css";
import { TonConnectButton } from "@tonconnect/ui-react";
import { useMainContract } from "./hooks/useMainContract";
import { useTonConnect } from "./hooks/useTonConnect";
import { fromNano } from "ton-core";
import WebApp from "@twa-dev/sdk";

function App() {
  const {
    contract_address,
    counter_value,
    recent_sender,
    owner_address,
    contract_balance,
    sendIncrement,
    sendDeposit,
    sendWithdrawal,
  } = useMainContract();
  const { connected } = useTonConnect();

  const showAlert = () => {
    WebApp.showAlert("Hey there!");
  };

  return (
    <div>
      <TonConnectButton />

      <div className="container">
        <a
          onClick={() => {
            showAlert();
          }}
        >
          Show Alert
        </a>
        <div>
          <b>{WebApp.platform}</b>
        </div>
        <div>
          <h3>Contract Data:</h3>
          <b>Our contract Address:</b>
          <div className="Hint">{contract_address}</div>
          <hr />

          <b>Our contract Owner:</b>
          <div className="Hint">{owner_address?.toString()}</div>
          <hr />

          {contract_balance !== null && (
            <>
              <b>Our contract Balance:</b>
              <div className="Hint">{fromNano(contract_balance)}</div>
              <hr />
            </>
          )}

          {recent_sender && (
            <>
              <b>Recent sender:</b>
              <div className="Hint">{recent_sender.toString()}</div>
              <hr />
            </>
          )}

          <>
            <b>Counter Value:</b>
            <div>{counter_value ?? "Loading..."}</div>
          </>
        </div>
        <div>
          <h3>Contract actions: </h3>
          {connected ? (
            <>
              <p>
                Increment contract balance by 1 TON, with 0.05 TON as a
                comission
              </p>
              <button onClick={sendIncrement}>Increment</button>
              <hr />

              <p>Deposit contract balance by 1 TON</p>
              <button onClick={sendDeposit}>Deposit</button>
              <hr />

              <p>Withdrawal from contract balance by 0.2 TON</p>
              <button onClick={sendWithdrawal}>Withdrawal</button>
              <hr />
            </>
          ) : (
            <p>Connect wallet to start action</p>
          )}
        </div>
        <div>
          <a
            href="https://testnet.tonscan.org/address/EQBdE89LfQcI5I9LCH-4zaIUOy-ttD-b241lltf_TPUAxQ3O"
            target="_blank"
          >
            explorer
          </a>
          <br />
          <a
            href="https://github.com/evilcore29/TONStepik_FE/tree/lesson-5.4"
            target="_blank"
          >
            github
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
