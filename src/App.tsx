import DaumPostcode from "react-daum-postcode";

function App() {
    const globalThis = window as any;
    return (
        <DaumPostcode
            style={{ width: "100vw", height: "100vh" }}
            onComplete={(data) => {
                if (/Mobi/i.test(window.navigator.userAgent)) {
                    if (/iPhone|iPad|iPod/i.test(navigator.userAgent))
                        globalThis.webkit.messageHandlers.postData.postMessage(
                            data.toString()
                        );
                    else {
                        globalThis.webview.postMessage(data.toString());
                    }
                }
            }}
        />
    );
}

export default App;
