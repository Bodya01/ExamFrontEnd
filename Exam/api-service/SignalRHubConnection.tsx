import { HttpTransportType, HubConnection, HubConnectionBuilder, LogLevel } from "@microsoft/signalr";
import APIRoutes from "./APIRoutes";

let SignalRHubConnection: Promise<HubConnection> = (async () => {
    const SignalRubConnectionFunc = new HubConnectionBuilder()
        .configureLogging(LogLevel.Debug)
        .withUrl(APIRoutes.getSignalRUrl(), {
            skipNegotiation: true,
            transport: HttpTransportType.WebSockets
        })
        .build();

    await SignalRubConnectionFunc.start();

    return SignalRubConnectionFunc;
})();

export default SignalRHubConnection;
