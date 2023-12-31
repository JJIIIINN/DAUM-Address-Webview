import DaumPostcode from "react-daum-postcode";

function App() {
    const globalThis = window as any;
    const mobile = /iphone|ipad|ipod|android/i.test(
        navigator.userAgent.toLowerCase()
    );
    return (
        <DaumPostcode
            style={{ width: "100vw", height: "100vh" }}
            onComplete={(data) => {
                if (mobile) {
                    if (
                        /iphone|ipad|ipod/i.test(
                            navigator.userAgent.toLowerCase()
                        )
                    )
                        globalThis.webkit.messageHandlers.callBackHandler.postMessage(
                            JSON.stringify(data)
                        );
                    else {
                        globalThis.Android.postAddress(JSON.stringify(data));
                    }
                } else {
                    globalThis.webkit.messageHandlers.callBackHandler.postMessage(
                        data
                    );
                }
            }}
        />
    );
}

export default App;
