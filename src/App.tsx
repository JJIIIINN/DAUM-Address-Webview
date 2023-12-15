import DaumPostcode from "react-daum-postcode";

function App() {
    const globalThis = window as any;
    return (
        <DaumPostcode
            onComplete={(data) => {
                if (/Mobi/i.test(window.navigator.userAgent)) {
                    if (/iPhone|iPad|iPod/i.test(navigator.userAgent))
                        globalThis.webkit.messageHandlers.postData.postMessage(
                            data
                        );
                    else {
                        globalThis.webview.postData(data);
                    }
                }
            }}
        />
    );
}

export default App;
