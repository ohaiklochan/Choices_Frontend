# Choices: A React Horror Game

Choices is a choose-your-own-adventure based game using two different choices. The outcome of the game is what you decide! Hopefully there are twists and turns in every direction of this text based game for you!

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installation

After cloning both the frontend and backend repositories, there are sepreate commands for the frontend and the backend. 

The backend repo can be found at https://github.com/ohaiklochan/Choices_Backend 

Run the following commands on the backend repo:

```
bundle install
rake db:migrate
rake db:seed
rails s
```

On the frontend repo, run the following command:

```
npm start
```

Go to this link http://localhost:3000/ to make sure that seed data has populated

When you run ```npm start``` it should lead you a page on the chrome broswer the fontend already generated.

## Contributing 

Bug reports and pull request are welcome on Github at https://github.com/Ohaiklochan/Choices_Frontend. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the Contributor Covenant code of conduct.

## Special Thanks

To Erin and Naomi for helping me through my understanding when I was stuck at certain points of this code!

## License

MIT License

Copyright (c) [2021] [Chloe F Steffens]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.