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
                        /iPhone|iPad|iPod/i.test(
                            navigator.userAgent.toLowerCase()
                        )
                    )
                        globalThis.webkit.messageHandlers.iOS.postMessage(
                            JSON.stringify(data)
                        );
                    else {
                        globalThis.Android.postAddress(JSON.stringify(data));
                    }
                }
            }}
        />
    );
}

export default App;
