import { userConsumer } from "./user.consumer";

export async function loadConsumer() {
    await userConsumer()
}