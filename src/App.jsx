import logo from "./logo.svg";
import styles from "./App.module.css";

function App() {
  return (
    <div>
      <div id="page" className="site">
        <div className="container">
          <div className="file-upload">
            <input type="file" name="files" class="file-input" multiple="multiple" />
            <div className="icon">
              <ion-icon name="arrow-up-outline"></ion-icon>
            </div>
            <h3>Drag & drop files here</h3>
            <span>- OR .</span>
            <strong>Browse</strong>
            <button className="remove">
              <ion-icon name="close"></ion-icon>
            </button>
          </div>
          <div className="list-upload">
            <ul>
              <li className="file-list">
                <div className="thumbnail">
                  <ion-icon name="document-outline"></ion-icon>
                  <ion-icon name="image-outline"></ion-icon>
                  <ion-icon name="musical-notes-outline"></ion-icon>
                  <ion-icon name="videocam-outline"></ion-icon>
                  <span className="completed">
                    <ion-icon name="checkmark"></ion-icon>
                  </span>
                </div>
                <div className="properties">
                  <span className="title">
                    <strong></strong>
                  </span>
                  <span className="size"></span>
                  <span className="progress">
                    <span className="buffer"></span>
                    <span className="percentage">0%</span>
                  </span>
                </div>
                <button className="remove">
                  <ion-icon name="close"></ion-icon>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
