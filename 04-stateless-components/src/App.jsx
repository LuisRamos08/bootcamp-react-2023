import "./App.css";
import UsersPage from "./pages/users/UsersPage";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="some-bg">
      <Layout >
        <UsersPage />
      </Layout>
    </div>
  );
}

export default App;
