type Message = () => string;
type Greetings = {
  name: string;
  message: Message;
};

function greetings(val: Greetings): void {
  console.log(`${val.message()}, value: ${val.name}`);
}

greetings({
  name: 'aaa',
  message: () => 'hello',
});
