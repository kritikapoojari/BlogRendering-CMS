import * as ContentStack from "contentstack";

const Stack = ContentStack.Stack(
	process.env.API_KEY,
	process.env.DELIVERY_TOKEN,
	process.env.ENVIROMENT
);

export default Stack;
