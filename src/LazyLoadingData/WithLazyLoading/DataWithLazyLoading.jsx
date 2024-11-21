import React from 'react'

export default function DataWithLazyLoading() {
    return (
        <>
            <div>
                <h4>Data</h4>
                <p>What Are We Building?
                    In this tutorial, we’ll show how to build an interactive tic-tac-toe game with React.

                    You can see what we’ll be building here: Final Result.

                    If the code doesn’t make sense to you, or if you are unfamiliar with the code’s syntax, don’t worry!

                    The goal of this tutorial is to help you understand React and its syntax.

                    We recommend that you check out the tic-tac-toe game before continuing with the tutorial.

                    One of the features that you’ll notice is that there is a numbered list to the right of the game’s board.

                    This list gives you a history of all of the moves that have occurred in the game, and it is updated as the game progresses.

                    You can close the tic-tac-toe game once you’re familiar with it. We’ll be starting from a simpler template in this tutorial.

                    Our next step is to set you up so that you can start building the game.

                    Prerequisites
                    We’ll assume that you have some familiarity with HTML and JavaScript,
                    but you should be able to follow along even if you’re coming from a different programming language.

                    We’ll also assume that you’re familiar with programming concepts like functions, objects, arrays, and to a lesser extent, classes.

                    If you need to review JavaScript, we recommend reading this guide.

                    Note that we’re also using some features from ES6 — a recent version of JavaScript. In this tutorial, we’re using arrow functions, classes, let, and const statements.

                    You can use the Babel REPL to check what ES6 code compiles to.

                    Setup for the Tutorial
                    There are two ways to complete this tutorial:
                    you can either write the code in your browser, or you can set up a local development environment on your computer.

                    Setup Option 1: Write Code in the Browser
                    This is the quickest way to get started!

                    First, open this Starter Code in a new tab.

                    The new tab should display an empty tic-tac-toe game board and React code. We will be editing the React code in this tutorial.

                    You can now skip the second setup option, and go to the Overview section to get an overview of React.

                    Setup Option 2: Local Development Environment
                    This is completely optional and not required for this tutorial!


                    Optional: Instructions for following along locally using your preferred text editor
                    Help, I’m Stuck!
                    If you get stuck, check out the community support resources.

                    In particular, Reactiflux Chat is a great way to get help quickly.

                    If you don’t receive an answer, or if you remain stuck,
                    please file an issue, and we’ll help you out.

                    Overview
                    Now that you’re set up, let’s get an overview of React!

                    What Is React?
                    React is a declarative, efficient, and flexible JavaScript library for building user interfaces.

                    It lets you compose complex UIs from small and isolated pieces of code called “components”.

                    React has a few different kinds of components, but we’ll start with React.Component subclasses:

                    We’ll get to the funny XML-like tags soon. We use components to tell React what we want to see on the screen.

                    When our data changes, React will efficiently update and re-render our components.

                    Here, ShoppingList is a React component class, or React component type. A component takes in parameters,
                    called props (short for “properties”), and returns a hierarchy of views to display via the render method.

                    The render method returns a description of what you want to see on the screen.

                    React takes the description and displays the result.

                    In particular, render returns a React element, which is a lightweight description of what to render.

                    Most React developers use a special syntax called “JSX” which makes these structures easier to write.

                    The div syntax is transformed at build time to React.createElement('div').

                    The example above is equivalent to:

                    See full expanded version.

                    If you’re curious, createElement() is described in more detail in the API reference,
                    but we won’t be using it in this tutorial.

                    Instead, we will keep using JSX.

                    JSX comes with the full power of JavaScript. You can put any JavaScript expressions within braces inside JSX.

                    Each React element is a JavaScript object that you can store in a variable or pass around in your program.

                    The ShoppingList component above only renders built-in DOM components like and .

                    But you can compose and render custom React components too.

                    For example, we can now refer to the whole shopping list by writing ShoppingList.

                    Each React component is encapsulated and can operate independently;
                    this allows you to build complex UIs from simple components.

                    Inspecting the Starter Code

                    If you’re going to work on the tutorial in your browser, open this code in a new tab: Starter Code.

                    If you’re going to work on the tutorial locally, instead open src/index.js in your project folder (you have already touched this file during the setup).

                    This Starter Code is the base of what we’re building. We’ve provided the CSS styling so that you only need to focus on learning React and programming the tic-tac-toe game.

                    By inspecting the code, you’ll notice that we have three React components:

                    Square
                    Board
                    Game
                    The Square component renders a single and the Board renders 9 squares.

                    The Game component renders a board with placeholder values which we’ll modify later.

                    There are currently no interactive components.

                    Passing Data Through Props
                    To get our feet wet, let’s try passing some data from our Board component to our Square component.

                    We strongly recommend typing code by hand as you’re working through the tutorial and not using copy/paste.

                    This will help you develop muscle memory and a stronger understanding.

                    In Board’s renderSquare method, change the code to pass a prop called value to the Square:
                </p>

                <p>What Are We Building?
                    In this tutorial, we’ll show how to build an interactive tic-tac-toe game with React.

                    You can see what we’ll be building here: Final Result.

                    If the code doesn’t make sense to you, or if you are unfamiliar with the code’s syntax, don’t worry!

                    The goal of this tutorial is to help you understand React and its syntax.

                    We recommend that you check out the tic-tac-toe game before continuing with the tutorial.

                    One of the features that you’ll notice is that there is a numbered list to the right of the game’s board.

                    This list gives you a history of all of the moves that have occurred in the game, and it is updated as the game progresses.

                    You can close the tic-tac-toe game once you’re familiar with it. We’ll be starting from a simpler template in this tutorial.

                    Our next step is to set you up so that you can start building the game.

                    Prerequisites
                    We’ll assume that you have some familiarity with HTML and JavaScript,
                    but you should be able to follow along even if you’re coming from a different programming language.

                    We’ll also assume that you’re familiar with programming concepts like functions, objects, arrays, and to a lesser extent, classes.

                    If you need to review JavaScript, we recommend reading this guide.

                    Note that we’re also using some features from ES6 — a recent version of JavaScript. In this tutorial, we’re using arrow functions, classes, let, and const statements.

                    You can use the Babel REPL to check what ES6 code compiles to.

                    Setup for the Tutorial
                    There are two ways to complete this tutorial:
                    you can either write the code in your browser, or you can set up a local development environment on your computer.

                    Setup Option 1: Write Code in the Browser
                    This is the quickest way to get started!

                    First, open this Starter Code in a new tab.

                    The new tab should display an empty tic-tac-toe game board and React code. We will be editing the React code in this tutorial.

                    You can now skip the second setup option, and go to the Overview section to get an overview of React.

                    Setup Option 2: Local Development Environment
                    This is completely optional and not required for this tutorial!


                    Optional: Instructions for following along locally using your preferred text editor
                    Help, I’m Stuck!
                    If you get stuck, check out the community support resources.

                    In particular, Reactiflux Chat is a great way to get help quickly.

                    If you don’t receive an answer, or if you remain stuck,
                    please file an issue, and we’ll help you out.

                    Overview
                    Now that you’re set up, let’s get an overview of React!

                    What Is React?
                    React is a declarative, efficient, and flexible JavaScript library for building user interfaces.

                    It lets you compose complex UIs from small and isolated pieces of code called “components”.

                    React has a few different kinds of components, but we’ll start with React.Component subclasses:

                    We’ll get to the funny XML-like tags soon. We use components to tell React what we want to see on the screen.

                    When our data changes, React will efficiently update and re-render our components.

                    Here, ShoppingList is a React component class, or React component type. A component takes in parameters,
                    called props (short for “properties”), and returns a hierarchy of views to display via the render method.

                    The render method returns a description of what you want to see on the screen.

                    React takes the description and displays the result.

                    In particular, render returns a React element, which is a lightweight description of what to render.

                    Most React developers use a special syntax called “JSX” which makes these structures easier to write.

                    The div syntax is transformed at build time to React.createElement('div').

                    The example above is equivalent to:

                    See full expanded version.

                    If you’re curious, createElement() is described in more detail in the API reference,
                    but we won’t be using it in this tutorial.

                    Instead, we will keep using JSX.

                    JSX comes with the full power of JavaScript. You can put any JavaScript expressions within braces inside JSX.

                    Each React element is a JavaScript object that you can store in a variable or pass around in your program.

                    The ShoppingList component above only renders built-in DOM components like and .

                    But you can compose and render custom React components too.

                    For example, we can now refer to the whole shopping list by writing ShoppingList.

                    Each React component is encapsulated and can operate independently;
                    this allows you to build complex UIs from simple components.

                    Inspecting the Starter Code

                    If you’re going to work on the tutorial in your browser, open this code in a new tab: Starter Code.

                    If you’re going to work on the tutorial locally, instead open src/index.js in your project folder (you have already touched this file during the setup).

                    This Starter Code is the base of what we’re building. We’ve provided the CSS styling so that you only need to focus on learning React and programming the tic-tac-toe game.

                    By inspecting the code, you’ll notice that we have three React components:

                    Square
                    Board
                    Game
                    The Square component renders a single and the Board renders 9 squares.

                    The Game component renders a board with placeholder values which we’ll modify later.

                    There are currently no interactive components.

                    Passing Data Through Props
                    To get our feet wet, let’s try passing some data from our Board component to our Square component.

                    We strongly recommend typing code by hand as you’re working through the tutorial and not using copy/paste.

                    This will help you develop muscle memory and a stronger understanding.

                    In Board’s renderSquare method, change the code to pass a prop called value to the Square:
                </p>

                <p>What Are We Building?
                    In this tutorial, we’ll show how to build an interactive tic-tac-toe game with React.

                    You can see what we’ll be building here: Final Result.

                    If the code doesn’t make sense to you, or if you are unfamiliar with the code’s syntax, don’t worry!

                    The goal of this tutorial is to help you understand React and its syntax.

                    We recommend that you check out the tic-tac-toe game before continuing with the tutorial.

                    One of the features that you’ll notice is that there is a numbered list to the right of the game’s board.

                    This list gives you a history of all of the moves that have occurred in the game, and it is updated as the game progresses.

                    You can close the tic-tac-toe game once you’re familiar with it. We’ll be starting from a simpler template in this tutorial.

                    Our next step is to set you up so that you can start building the game.

                    Prerequisites
                    We’ll assume that you have some familiarity with HTML and JavaScript,
                    but you should be able to follow along even if you’re coming from a different programming language.

                    We’ll also assume that you’re familiar with programming concepts like functions, objects, arrays, and to a lesser extent, classes.

                    If you need to review JavaScript, we recommend reading this guide.

                    Note that we’re also using some features from ES6 — a recent version of JavaScript. In this tutorial, we’re using arrow functions, classes, let, and const statements.

                    You can use the Babel REPL to check what ES6 code compiles to.

                    Setup for the Tutorial
                    There are two ways to complete this tutorial:
                    you can either write the code in your browser, or you can set up a local development environment on your computer.

                    Setup Option 1: Write Code in the Browser
                    This is the quickest way to get started!

                    First, open this Starter Code in a new tab.

                    The new tab should display an empty tic-tac-toe game board and React code. We will be editing the React code in this tutorial.

                    You can now skip the second setup option, and go to the Overview section to get an overview of React.

                    Setup Option 2: Local Development Environment
                    This is completely optional and not required for this tutorial!


                    Optional: Instructions for following along locally using your preferred text editor
                    Help, I’m Stuck!
                    If you get stuck, check out the community support resources.

                    In particular, Reactiflux Chat is a great way to get help quickly.

                    If you don’t receive an answer, or if you remain stuck,
                    please file an issue, and we’ll help you out.

                    Overview
                    Now that you’re set up, let’s get an overview of React!

                    What Is React?
                    React is a declarative, efficient, and flexible JavaScript library for building user interfaces.

                    It lets you compose complex UIs from small and isolated pieces of code called “components”.

                    React has a few different kinds of components, but we’ll start with React.Component subclasses:

                    We’ll get to the funny XML-like tags soon. We use components to tell React what we want to see on the screen.

                    When our data changes, React will efficiently update and re-render our components.

                    Here, ShoppingList is a React component class, or React component type. A component takes in parameters,
                    called props (short for “properties”), and returns a hierarchy of views to display via the render method.

                    The render method returns a description of what you want to see on the screen.

                    React takes the description and displays the result.

                    In particular, render returns a React element, which is a lightweight description of what to render.

                    Most React developers use a special syntax called “JSX” which makes these structures easier to write.

                    The div syntax is transformed at build time to React.createElement('div').

                    The example above is equivalent to:

                    See full expanded version.

                    If you’re curious, createElement() is described in more detail in the API reference,
                    but we won’t be using it in this tutorial.

                    Instead, we will keep using JSX.

                    JSX comes with the full power of JavaScript. You can put any JavaScript expressions within braces inside JSX.

                    Each React element is a JavaScript object that you can store in a variable or pass around in your program.

                    The ShoppingList component above only renders built-in DOM components like and .

                    But you can compose and render custom React components too.

                    For example, we can now refer to the whole shopping list by writing ShoppingList.

                    Each React component is encapsulated and can operate independently;
                    this allows you to build complex UIs from simple components.

                    Inspecting the Starter Code

                    If you’re going to work on the tutorial in your browser, open this code in a new tab: Starter Code.

                    If you’re going to work on the tutorial locally, instead open src/index.js in your project folder (you have already touched this file during the setup).

                    This Starter Code is the base of what we’re building. We’ve provided the CSS styling so that you only need to focus on learning React and programming the tic-tac-toe game.

                    By inspecting the code, you’ll notice that we have three React components:

                    Square
                    Board
                    Game
                    The Square component renders a single and the Board renders 9 squares.

                    The Game component renders a board with placeholder values which we’ll modify later.

                    There are currently no interactive components.

                    Passing Data Through Props
                    To get our feet wet, let’s try passing some data from our Board component to our Square component.

                    We strongly recommend typing code by hand as you’re working through the tutorial and not using copy/paste.

                    This will help you develop muscle memory and a stronger understanding.

                    In Board’s renderSquare method, change the code to pass a prop called value to the Square:
                </p>

                <p>What Are We Building?
                    In this tutorial, we’ll show how to build an interactive tic-tac-toe game with React.

                    You can see what we’ll be building here: Final Result.

                    If the code doesn’t make sense to you, or if you are unfamiliar with the code’s syntax, don’t worry!

                    The goal of this tutorial is to help you understand React and its syntax.

                    We recommend that you check out the tic-tac-toe game before continuing with the tutorial.

                    One of the features that you’ll notice is that there is a numbered list to the right of the game’s board.

                    This list gives you a history of all of the moves that have occurred in the game, and it is updated as the game progresses.

                    You can close the tic-tac-toe game once you’re familiar with it. We’ll be starting from a simpler template in this tutorial.

                    Our next step is to set you up so that you can start building the game.

                    Prerequisites
                    We’ll assume that you have some familiarity with HTML and JavaScript,
                    but you should be able to follow along even if you’re coming from a different programming language.

                    We’ll also assume that you’re familiar with programming concepts like functions, objects, arrays, and to a lesser extent, classes.

                    If you need to review JavaScript, we recommend reading this guide.

                    Note that we’re also using some features from ES6 — a recent version of JavaScript. In this tutorial, we’re using arrow functions, classes, let, and const statements.

                    You can use the Babel REPL to check what ES6 code compiles to.

                    Setup for the Tutorial
                    There are two ways to complete this tutorial:
                    you can either write the code in your browser, or you can set up a local development environment on your computer.

                    Setup Option 1: Write Code in the Browser
                    This is the quickest way to get started!

                    First, open this Starter Code in a new tab.

                    The new tab should display an empty tic-tac-toe game board and React code. We will be editing the React code in this tutorial.

                    You can now skip the second setup option, and go to the Overview section to get an overview of React.

                    Setup Option 2: Local Development Environment
                    This is completely optional and not required for this tutorial!


                    Optional: Instructions for following along locally using your preferred text editor
                    Help, I’m Stuck!
                    If you get stuck, check out the community support resources.

                    In particular, Reactiflux Chat is a great way to get help quickly.

                    If you don’t receive an answer, or if you remain stuck,
                    please file an issue, and we’ll help you out.

                    Overview
                    Now that you’re set up, let’s get an overview of React!

                    What Is React?
                    React is a declarative, efficient, and flexible JavaScript library for building user interfaces.

                    It lets you compose complex UIs from small and isolated pieces of code called “components”.

                    React has a few different kinds of components, but we’ll start with React.Component subclasses:

                    We’ll get to the funny XML-like tags soon. We use components to tell React what we want to see on the screen.

                    When our data changes, React will efficiently update and re-render our components.

                    Here, ShoppingList is a React component class, or React component type. A component takes in parameters,
                    called props (short for “properties”), and returns a hierarchy of views to display via the render method.

                    The render method returns a description of what you want to see on the screen.

                    React takes the description and displays the result.

                    In particular, render returns a React element, which is a lightweight description of what to render.

                    Most React developers use a special syntax called “JSX” which makes these structures easier to write.

                    The div syntax is transformed at build time to React.createElement('div').

                    The example above is equivalent to:

                    See full expanded version.

                    If you’re curious, createElement() is described in more detail in the API reference,
                    but we won’t be using it in this tutorial.

                    Instead, we will keep using JSX.

                    JSX comes with the full power of JavaScript. You can put any JavaScript expressions within braces inside JSX.

                    Each React element is a JavaScript object that you can store in a variable or pass around in your program.

                    The ShoppingList component above only renders built-in DOM components like and .

                    But you can compose and render custom React components too.

                    For example, we can now refer to the whole shopping list by writing ShoppingList.

                    Each React component is encapsulated and can operate independently;
                    this allows you to build complex UIs from simple components.

                    Inspecting the Starter Code

                    If you’re going to work on the tutorial in your browser, open this code in a new tab: Starter Code.

                    If you’re going to work on the tutorial locally, instead open src/index.js in your project folder (you have already touched this file during the setup).

                    This Starter Code is the base of what we’re building. We’ve provided the CSS styling so that you only need to focus on learning React and programming the tic-tac-toe game.

                    By inspecting the code, you’ll notice that we have three React components:

                    Square
                    Board
                    Game
                    The Square component renders a single and the Board renders 9 squares.

                    The Game component renders a board with placeholder values which we’ll modify later.

                    There are currently no interactive components.

                    Passing Data Through Props
                    To get our feet wet, let’s try passing some data from our Board component to our Square component.

                    We strongly recommend typing code by hand as you’re working through the tutorial and not using copy/paste.

                    This will help you develop muscle memory and a stronger understanding.

                    In Board’s renderSquare method, change the code to pass a prop called value to the Square:
                </p>

                <p>What Are We Building?
                    In this tutorial, we’ll show how to build an interactive tic-tac-toe game with React.

                    You can see what we’ll be building here: Final Result.

                    If the code doesn’t make sense to you, or if you are unfamiliar with the code’s syntax, don’t worry!

                    The goal of this tutorial is to help you understand React and its syntax.

                    We recommend that you check out the tic-tac-toe game before continuing with the tutorial.

                    One of the features that you’ll notice is that there is a numbered list to the right of the game’s board.

                    This list gives you a history of all of the moves that have occurred in the game, and it is updated as the game progresses.

                    You can close the tic-tac-toe game once you’re familiar with it. We’ll be starting from a simpler template in this tutorial.

                    Our next step is to set you up so that you can start building the game.

                    Prerequisites
                    We’ll assume that you have some familiarity with HTML and JavaScript,
                    but you should be able to follow along even if you’re coming from a different programming language.

                    We’ll also assume that you’re familiar with programming concepts like functions, objects, arrays, and to a lesser extent, classes.

                    If you need to review JavaScript, we recommend reading this guide.

                    Note that we’re also using some features from ES6 — a recent version of JavaScript. In this tutorial, we’re using arrow functions, classes, let, and const statements.

                    You can use the Babel REPL to check what ES6 code compiles to.

                    Setup for the Tutorial
                    There are two ways to complete this tutorial:
                    you can either write the code in your browser, or you can set up a local development environment on your computer.

                    Setup Option 1: Write Code in the Browser
                    This is the quickest way to get started!

                    First, open this Starter Code in a new tab.

                    The new tab should display an empty tic-tac-toe game board and React code. We will be editing the React code in this tutorial.

                    You can now skip the second setup option, and go to the Overview section to get an overview of React.

                    Setup Option 2: Local Development Environment
                    This is completely optional and not required for this tutorial!


                    Optional: Instructions for following along locally using your preferred text editor
                    Help, I’m Stuck!
                    If you get stuck, check out the community support resources.

                    In particular, Reactiflux Chat is a great way to get help quickly.

                    If you don’t receive an answer, or if you remain stuck,
                    please file an issue, and we’ll help you out.

                    Overview
                    Now that you’re set up, let’s get an overview of React!

                    What Is React?
                    React is a declarative, efficient, and flexible JavaScript library for building user interfaces.

                    It lets you compose complex UIs from small and isolated pieces of code called “components”.

                    React has a few different kinds of components, but we’ll start with React.Component subclasses:

                    We’ll get to the funny XML-like tags soon. We use components to tell React what we want to see on the screen.

                    When our data changes, React will efficiently update and re-render our components.

                    Here, ShoppingList is a React component class, or React component type. A component takes in parameters,
                    called props (short for “properties”), and returns a hierarchy of views to display via the render method.

                    The render method returns a description of what you want to see on the screen.

                    React takes the description and displays the result.

                    In particular, render returns a React element, which is a lightweight description of what to render.

                    Most React developers use a special syntax called “JSX” which makes these structures easier to write.

                    The div syntax is transformed at build time to React.createElement('div').

                    The example above is equivalent to:

                    See full expanded version.

                    If you’re curious, createElement() is described in more detail in the API reference,
                    but we won’t be using it in this tutorial.

                    Instead, we will keep using JSX.

                    JSX comes with the full power of JavaScript. You can put any JavaScript expressions within braces inside JSX.

                    Each React element is a JavaScript object that you can store in a variable or pass around in your program.

                    The ShoppingList component above only renders built-in DOM components like and .

                    But you can compose and render custom React components too.

                    For example, we can now refer to the whole shopping list by writing ShoppingList.

                    Each React component is encapsulated and can operate independently;
                    this allows you to build complex UIs from simple components.

                    Inspecting the Starter Code

                    If you’re going to work on the tutorial in your browser, open this code in a new tab: Starter Code.

                    If you’re going to work on the tutorial locally, instead open src/index.js in your project folder (you have already touched this file during the setup).

                    This Starter Code is the base of what we’re building. We’ve provided the CSS styling so that you only need to focus on learning React and programming the tic-tac-toe game.

                    By inspecting the code, you’ll notice that we have three React components:

                    Square
                    Board
                    Game
                    The Square component renders a single and the Board renders 9 squares.

                    The Game component renders a board with placeholder values which we’ll modify later.

                    There are currently no interactive components.

                    Passing Data Through Props
                    To get our feet wet, let’s try passing some data from our Board component to our Square component.

                    We strongly recommend typing code by hand as you’re working through the tutorial and not using copy/paste.

                    This will help you develop muscle memory and a stronger understanding.

                    In Board’s renderSquare method, change the code to pass a prop called value to the Square:
                </p>

                <p>What Are We Building?
                    In this tutorial, we’ll show how to build an interactive tic-tac-toe game with React.

                    You can see what we’ll be building here: Final Result.

                    If the code doesn’t make sense to you, or if you are unfamiliar with the code’s syntax, don’t worry!

                    The goal of this tutorial is to help you understand React and its syntax.

                    We recommend that you check out the tic-tac-toe game before continuing with the tutorial.

                    One of the features that you’ll notice is that there is a numbered list to the right of the game’s board.

                    This list gives you a history of all of the moves that have occurred in the game, and it is updated as the game progresses.

                    You can close the tic-tac-toe game once you’re familiar with it. We’ll be starting from a simpler template in this tutorial.

                    Our next step is to set you up so that you can start building the game.

                    Prerequisites
                    We’ll assume that you have some familiarity with HTML and JavaScript,
                    but you should be able to follow along even if you’re coming from a different programming language.

                    We’ll also assume that you’re familiar with programming concepts like functions, objects, arrays, and to a lesser extent, classes.

                    If you need to review JavaScript, we recommend reading this guide.

                    Note that we’re also using some features from ES6 — a recent version of JavaScript. In this tutorial, we’re using arrow functions, classes, let, and const statements.

                    You can use the Babel REPL to check what ES6 code compiles to.

                    Setup for the Tutorial
                    There are two ways to complete this tutorial:
                    you can either write the code in your browser, or you can set up a local development environment on your computer.

                    Setup Option 1: Write Code in the Browser
                    This is the quickest way to get started!

                    First, open this Starter Code in a new tab.

                    The new tab should display an empty tic-tac-toe game board and React code. We will be editing the React code in this tutorial.

                    You can now skip the second setup option, and go to the Overview section to get an overview of React.

                    Setup Option 2: Local Development Environment
                    This is completely optional and not required for this tutorial!


                    Optional: Instructions for following along locally using your preferred text editor
                    Help, I’m Stuck!
                    If you get stuck, check out the community support resources.

                    In particular, Reactiflux Chat is a great way to get help quickly.

                    If you don’t receive an answer, or if you remain stuck,
                    please file an issue, and we’ll help you out.

                    Overview
                    Now that you’re set up, let’s get an overview of React!

                    What Is React?
                    React is a declarative, efficient, and flexible JavaScript library for building user interfaces.

                    It lets you compose complex UIs from small and isolated pieces of code called “components”.

                    React has a few different kinds of components, but we’ll start with React.Component subclasses:

                    We’ll get to the funny XML-like tags soon. We use components to tell React what we want to see on the screen.

                    When our data changes, React will efficiently update and re-render our components.

                    Here, ShoppingList is a React component class, or React component type. A component takes in parameters,
                    called props (short for “properties”), and returns a hierarchy of views to display via the render method.

                    The render method returns a description of what you want to see on the screen.

                    React takes the description and displays the result.

                    In particular, render returns a React element, which is a lightweight description of what to render.

                    Most React developers use a special syntax called “JSX” which makes these structures easier to write.

                    The div syntax is transformed at build time to React.createElement('div').

                    The example above is equivalent to:

                    See full expanded version.

                    If you’re curious, createElement() is described in more detail in the API reference,
                    but we won’t be using it in this tutorial.

                    Instead, we will keep using JSX.

                    JSX comes with the full power of JavaScript. You can put any JavaScript expressions within braces inside JSX.

                    Each React element is a JavaScript object that you can store in a variable or pass around in your program.

                    The ShoppingList component above only renders built-in DOM components like and .

                    But you can compose and render custom React components too.

                    For example, we can now refer to the whole shopping list by writing ShoppingList.

                    Each React component is encapsulated and can operate independently;
                    this allows you to build complex UIs from simple components.

                    Inspecting the Starter Code

                    If you’re going to work on the tutorial in your browser, open this code in a new tab: Starter Code.

                    If you’re going to work on the tutorial locally, instead open src/index.js in your project folder (you have already touched this file during the setup).

                    This Starter Code is the base of what we’re building. We’ve provided the CSS styling so that you only need to focus on learning React and programming the tic-tac-toe game.

                    By inspecting the code, you’ll notice that we have three React components:

                    Square
                    Board
                    Game
                    The Square component renders a single and the Board renders 9 squares.

                    The Game component renders a board with placeholder values which we’ll modify later.

                    There are currently no interactive components.

                    Passing Data Through Props
                    To get our feet wet, let’s try passing some data from our Board component to our Square component.

                    We strongly recommend typing code by hand as you’re working through the tutorial and not using copy/paste.

                    This will help you develop muscle memory and a stronger understanding.

                    In Board’s renderSquare method, change the code to pass a prop called value to the Square:
                </p>

                <p>What Are We Building?
                    In this tutorial, we’ll show how to build an interactive tic-tac-toe game with React.

                    You can see what we’ll be building here: Final Result.

                    If the code doesn’t make sense to you, or if you are unfamiliar with the code’s syntax, don’t worry!

                    The goal of this tutorial is to help you understand React and its syntax.

                    We recommend that you check out the tic-tac-toe game before continuing with the tutorial.

                    One of the features that you’ll notice is that there is a numbered list to the right of the game’s board.

                    This list gives you a history of all of the moves that have occurred in the game, and it is updated as the game progresses.

                    You can close the tic-tac-toe game once you’re familiar with it. We’ll be starting from a simpler template in this tutorial.

                    Our next step is to set you up so that you can start building the game.

                    Prerequisites
                    We’ll assume that you have some familiarity with HTML and JavaScript,
                    but you should be able to follow along even if you’re coming from a different programming language.

                    We’ll also assume that you’re familiar with programming concepts like functions, objects, arrays, and to a lesser extent, classes.

                    If you need to review JavaScript, we recommend reading this guide.

                    Note that we’re also using some features from ES6 — a recent version of JavaScript. In this tutorial, we’re using arrow functions, classes, let, and const statements.

                    You can use the Babel REPL to check what ES6 code compiles to.

                    Setup for the Tutorial
                    There are two ways to complete this tutorial:
                    you can either write the code in your browser, or you can set up a local development environment on your computer.

                    Setup Option 1: Write Code in the Browser
                    This is the quickest way to get started!

                    First, open this Starter Code in a new tab.

                    The new tab should display an empty tic-tac-toe game board and React code. We will be editing the React code in this tutorial.

                    You can now skip the second setup option, and go to the Overview section to get an overview of React.

                    Setup Option 2: Local Development Environment
                    This is completely optional and not required for this tutorial!


                    Optional: Instructions for following along locally using your preferred text editor
                    Help, I’m Stuck!
                    If you get stuck, check out the community support resources.

                    In particular, Reactiflux Chat is a great way to get help quickly.

                    If you don’t receive an answer, or if you remain stuck,
                    please file an issue, and we’ll help you out.

                    Overview
                    Now that you’re set up, let’s get an overview of React!

                    What Is React?
                    React is a declarative, efficient, and flexible JavaScript library for building user interfaces.

                    It lets you compose complex UIs from small and isolated pieces of code called “components”.

                    React has a few different kinds of components, but we’ll start with React.Component subclasses:

                    We’ll get to the funny XML-like tags soon. We use components to tell React what we want to see on the screen.

                    When our data changes, React will efficiently update and re-render our components.

                    Here, ShoppingList is a React component class, or React component type. A component takes in parameters,
                    called props (short for “properties”), and returns a hierarchy of views to display via the render method.

                    The render method returns a description of what you want to see on the screen.

                    React takes the description and displays the result.

                    In particular, render returns a React element, which is a lightweight description of what to render.

                    Most React developers use a special syntax called “JSX” which makes these structures easier to write.

                    The div syntax is transformed at build time to React.createElement('div').

                    The example above is equivalent to:

                    See full expanded version.

                    If you’re curious, createElement() is described in more detail in the API reference,
                    but we won’t be using it in this tutorial.

                    Instead, we will keep using JSX.

                    JSX comes with the full power of JavaScript. You can put any JavaScript expressions within braces inside JSX.

                    Each React element is a JavaScript object that you can store in a variable or pass around in your program.

                    The ShoppingList component above only renders built-in DOM components like and .

                    But you can compose and render custom React components too.

                    For example, we can now refer to the whole shopping list by writing ShoppingList.

                    Each React component is encapsulated and can operate independently;
                    this allows you to build complex UIs from simple components.

                    Inspecting the Starter Code

                    If you’re going to work on the tutorial in your browser, open this code in a new tab: Starter Code.

                    If you’re going to work on the tutorial locally, instead open src/index.js in your project folder (you have already touched this file during the setup).

                    This Starter Code is the base of what we’re building. We’ve provided the CSS styling so that you only need to focus on learning React and programming the tic-tac-toe game.

                    By inspecting the code, you’ll notice that we have three React components:

                    Square
                    Board
                    Game
                    The Square component renders a single and the Board renders 9 squares.

                    The Game component renders a board with placeholder values which we’ll modify later.

                    There are currently no interactive components.

                    Passing Data Through Props
                    To get our feet wet, let’s try passing some data from our Board component to our Square component.

                    We strongly recommend typing code by hand as you’re working through the tutorial and not using copy/paste.

                    This will help you develop muscle memory and a stronger understanding.

                    In Board’s renderSquare method, change the code to pass a prop called value to the Square:
                </p>

                <p>What Are We Building?
                    In this tutorial, we’ll show how to build an interactive tic-tac-toe game with React.

                    You can see what we’ll be building here: Final Result.

                    If the code doesn’t make sense to you, or if you are unfamiliar with the code’s syntax, don’t worry!

                    The goal of this tutorial is to help you understand React and its syntax.

                    We recommend that you check out the tic-tac-toe game before continuing with the tutorial.

                    One of the features that you’ll notice is that there is a numbered list to the right of the game’s board.

                    This list gives you a history of all of the moves that have occurred in the game, and it is updated as the game progresses.

                    You can close the tic-tac-toe game once you’re familiar with it. We’ll be starting from a simpler template in this tutorial.

                    Our next step is to set you up so that you can start building the game.

                    Prerequisites
                    We’ll assume that you have some familiarity with HTML and JavaScript,
                    but you should be able to follow along even if you’re coming from a different programming language.

                    We’ll also assume that you’re familiar with programming concepts like functions, objects, arrays, and to a lesser extent, classes.

                    If you need to review JavaScript, we recommend reading this guide.

                    Note that we’re also using some features from ES6 — a recent version of JavaScript. In this tutorial, we’re using arrow functions, classes, let, and const statements.

                    You can use the Babel REPL to check what ES6 code compiles to.

                    Setup for the Tutorial
                    There are two ways to complete this tutorial:
                    you can either write the code in your browser, or you can set up a local development environment on your computer.

                    Setup Option 1: Write Code in the Browser
                    This is the quickest way to get started!

                    First, open this Starter Code in a new tab.

                    The new tab should display an empty tic-tac-toe game board and React code. We will be editing the React code in this tutorial.

                    You can now skip the second setup option, and go to the Overview section to get an overview of React.

                    Setup Option 2: Local Development Environment
                    This is completely optional and not required for this tutorial!


                    Optional: Instructions for following along locally using your preferred text editor
                    Help, I’m Stuck!
                    If you get stuck, check out the community support resources.

                    In particular, Reactiflux Chat is a great way to get help quickly.

                    If you don’t receive an answer, or if you remain stuck,
                    please file an issue, and we’ll help you out.

                    Overview
                    Now that you’re set up, let’s get an overview of React!

                    What Is React?
                    React is a declarative, efficient, and flexible JavaScript library for building user interfaces.

                    It lets you compose complex UIs from small and isolated pieces of code called “components”.

                    React has a few different kinds of components, but we’ll start with React.Component subclasses:

                    We’ll get to the funny XML-like tags soon. We use components to tell React what we want to see on the screen.

                    When our data changes, React will efficiently update and re-render our components.

                    Here, ShoppingList is a React component class, or React component type. A component takes in parameters,
                    called props (short for “properties”), and returns a hierarchy of views to display via the render method.

                    The render method returns a description of what you want to see on the screen.

                    React takes the description and displays the result.

                    In particular, render returns a React element, which is a lightweight description of what to render.

                    Most React developers use a special syntax called “JSX” which makes these structures easier to write.

                    The div syntax is transformed at build time to React.createElement('div').

                    The example above is equivalent to:

                    See full expanded version.

                    If you’re curious, createElement() is described in more detail in the API reference,
                    but we won’t be using it in this tutorial.

                    Instead, we will keep using JSX.

                    JSX comes with the full power of JavaScript. You can put any JavaScript expressions within braces inside JSX.

                    Each React element is a JavaScript object that you can store in a variable or pass around in your program.

                    The ShoppingList component above only renders built-in DOM components like and .

                    But you can compose and render custom React components too.

                    For example, we can now refer to the whole shopping list by writing ShoppingList.

                    Each React component is encapsulated and can operate independently;
                    this allows you to build complex UIs from simple components.

                    Inspecting the Starter Code

                    If you’re going to work on the tutorial in your browser, open this code in a new tab: Starter Code.

                    If you’re going to work on the tutorial locally, instead open src/index.js in your project folder (you have already touched this file during the setup).

                    This Starter Code is the base of what we’re building. We’ve provided the CSS styling so that you only need to focus on learning React and programming the tic-tac-toe game.

                    By inspecting the code, you’ll notice that we have three React components:

                    Square
                    Board
                    Game
                    The Square component renders a single and the Board renders 9 squares.

                    The Game component renders a board with placeholder values which we’ll modify later.

                    There are currently no interactive components.

                    Passing Data Through Props
                    To get our feet wet, let’s try passing some data from our Board component to our Square component.

                    We strongly recommend typing code by hand as you’re working through the tutorial and not using copy/paste.

                    This will help you develop muscle memory and a stronger understanding.

                    In Board’s renderSquare method, change the code to pass a prop called value to the Square:
                </p>

                <p>What Are We Building?
                    In this tutorial, we’ll show how to build an interactive tic-tac-toe game with React.

                    You can see what we’ll be building here: Final Result.

                    If the code doesn’t make sense to you, or if you are unfamiliar with the code’s syntax, don’t worry!

                    The goal of this tutorial is to help you understand React and its syntax.

                    We recommend that you check out the tic-tac-toe game before continuing with the tutorial.

                    One of the features that you’ll notice is that there is a numbered list to the right of the game’s board.

                    This list gives you a history of all of the moves that have occurred in the game, and it is updated as the game progresses.

                    You can close the tic-tac-toe game once you’re familiar with it. We’ll be starting from a simpler template in this tutorial.

                    Our next step is to set you up so that you can start building the game.

                    Prerequisites
                    We’ll assume that you have some familiarity with HTML and JavaScript,
                    but you should be able to follow along even if you’re coming from a different programming language.

                    We’ll also assume that you’re familiar with programming concepts like functions, objects, arrays, and to a lesser extent, classes.

                    If you need to review JavaScript, we recommend reading this guide.

                    Note that we’re also using some features from ES6 — a recent version of JavaScript. In this tutorial, we’re using arrow functions, classes, let, and const statements.

                    You can use the Babel REPL to check what ES6 code compiles to.

                    Setup for the Tutorial
                    There are two ways to complete this tutorial:
                    you can either write the code in your browser, or you can set up a local development environment on your computer.

                    Setup Option 1: Write Code in the Browser
                    This is the quickest way to get started!

                    First, open this Starter Code in a new tab.

                    The new tab should display an empty tic-tac-toe game board and React code. We will be editing the React code in this tutorial.

                    You can now skip the second setup option, and go to the Overview section to get an overview of React.

                    Setup Option 2: Local Development Environment
                    This is completely optional and not required for this tutorial!


                    Optional: Instructions for following along locally using your preferred text editor
                    Help, I’m Stuck!
                    If you get stuck, check out the community support resources.

                    In particular, Reactiflux Chat is a great way to get help quickly.

                    If you don’t receive an answer, or if you remain stuck,
                    please file an issue, and we’ll help you out.

                    Overview
                    Now that you’re set up, let’s get an overview of React!

                    What Is React?
                    React is a declarative, efficient, and flexible JavaScript library for building user interfaces.

                    It lets you compose complex UIs from small and isolated pieces of code called “components”.

                    React has a few different kinds of components, but we’ll start with React.Component subclasses:

                    We’ll get to the funny XML-like tags soon. We use components to tell React what we want to see on the screen.

                    When our data changes, React will efficiently update and re-render our components.

                    Here, ShoppingList is a React component class, or React component type. A component takes in parameters,
                    called props (short for “properties”), and returns a hierarchy of views to display via the render method.

                    The render method returns a description of what you want to see on the screen.

                    React takes the description and displays the result.

                    In particular, render returns a React element, which is a lightweight description of what to render.

                    Most React developers use a special syntax called “JSX” which makes these structures easier to write.

                    The div syntax is transformed at build time to React.createElement('div').

                    The example above is equivalent to:

                    See full expanded version.

                    If you’re curious, createElement() is described in more detail in the API reference,
                    but we won’t be using it in this tutorial.

                    Instead, we will keep using JSX.

                    JSX comes with the full power of JavaScript. You can put any JavaScript expressions within braces inside JSX.

                    Each React element is a JavaScript object that you can store in a variable or pass around in your program.

                    The ShoppingList component above only renders built-in DOM components like and .

                    But you can compose and render custom React components too.

                    For example, we can now refer to the whole shopping list by writing ShoppingList.

                    Each React component is encapsulated and can operate independently;
                    this allows you to build complex UIs from simple components.

                    Inspecting the Starter Code

                    If you’re going to work on the tutorial in your browser, open this code in a new tab: Starter Code.

                    If you’re going to work on the tutorial locally, instead open src/index.js in your project folder (you have already touched this file during the setup).

                    This Starter Code is the base of what we’re building. We’ve provided the CSS styling so that you only need to focus on learning React and programming the tic-tac-toe game.

                    By inspecting the code, you’ll notice that we have three React components:

                    Square
                    Board
                    Game
                    The Square component renders a single and the Board renders 9 squares.

                    The Game component renders a board with placeholder values which we’ll modify later.

                    There are currently no interactive components.

                    Passing Data Through Props
                    To get our feet wet, let’s try passing some data from our Board component to our Square component.

                    We strongly recommend typing code by hand as you’re working through the tutorial and not using copy/paste.

                    This will help you develop muscle memory and a stronger understanding.

                    In Board’s renderSquare method, change the code to pass a prop called value to the Square:
                </p>

                <p>What Are We Building?
                    In this tutorial, we’ll show how to build an interactive tic-tac-toe game with React.

                    You can see what we’ll be building here: Final Result.

                    If the code doesn’t make sense to you, or if you are unfamiliar with the code’s syntax, don’t worry!

                    The goal of this tutorial is to help you understand React and its syntax.

                    We recommend that you check out the tic-tac-toe game before continuing with the tutorial.

                    One of the features that you’ll notice is that there is a numbered list to the right of the game’s board.

                    This list gives you a history of all of the moves that have occurred in the game, and it is updated as the game progresses.

                    You can close the tic-tac-toe game once you’re familiar with it. We’ll be starting from a simpler template in this tutorial.

                    Our next step is to set you up so that you can start building the game.

                    Prerequisites
                    We’ll assume that you have some familiarity with HTML and JavaScript,
                    but you should be able to follow along even if you’re coming from a different programming language.

                    We’ll also assume that you’re familiar with programming concepts like functions, objects, arrays, and to a lesser extent, classes.

                    If you need to review JavaScript, we recommend reading this guide.

                    Note that we’re also using some features from ES6 — a recent version of JavaScript. In this tutorial, we’re using arrow functions, classes, let, and const statements.

                    You can use the Babel REPL to check what ES6 code compiles to.

                    Setup for the Tutorial
                    There are two ways to complete this tutorial:
                    you can either write the code in your browser, or you can set up a local development environment on your computer.

                    Setup Option 1: Write Code in the Browser
                    This is the quickest way to get started!

                    First, open this Starter Code in a new tab.

                    The new tab should display an empty tic-tac-toe game board and React code. We will be editing the React code in this tutorial.

                    You can now skip the second setup option, and go to the Overview section to get an overview of React.

                    Setup Option 2: Local Development Environment
                    This is completely optional and not required for this tutorial!


                    Optional: Instructions for following along locally using your preferred text editor
                    Help, I’m Stuck!
                    If you get stuck, check out the community support resources.

                    In particular, Reactiflux Chat is a great way to get help quickly.

                    If you don’t receive an answer, or if you remain stuck,
                    please file an issue, and we’ll help you out.

                    Overview
                    Now that you’re set up, let’s get an overview of React!

                    What Is React?
                    React is a declarative, efficient, and flexible JavaScript library for building user interfaces.

                    It lets you compose complex UIs from small and isolated pieces of code called “components”.

                    React has a few different kinds of components, but we’ll start with React.Component subclasses:

                    We’ll get to the funny XML-like tags soon. We use components to tell React what we want to see on the screen.

                    When our data changes, React will efficiently update and re-render our components.

                    Here, ShoppingList is a React component class, or React component type. A component takes in parameters,
                    called props (short for “properties”), and returns a hierarchy of views to display via the render method.

                    The render method returns a description of what you want to see on the screen.

                    React takes the description and displays the result.

                    In particular, render returns a React element, which is a lightweight description of what to render.

                    Most React developers use a special syntax called “JSX” which makes these structures easier to write.

                    The div syntax is transformed at build time to React.createElement('div').

                    The example above is equivalent to:

                    See full expanded version.

                    If you’re curious, createElement() is described in more detail in the API reference,
                    but we won’t be using it in this tutorial.

                    Instead, we will keep using JSX.

                    JSX comes with the full power of JavaScript. You can put any JavaScript expressions within braces inside JSX.

                    Each React element is a JavaScript object that you can store in a variable or pass around in your program.

                    The ShoppingList component above only renders built-in DOM components like and .

                    But you can compose and render custom React components too.

                    For example, we can now refer to the whole shopping list by writing ShoppingList.

                    Each React component is encapsulated and can operate independently;
                    this allows you to build complex UIs from simple components.

                    Inspecting the Starter Code

                    If you’re going to work on the tutorial in your browser, open this code in a new tab: Starter Code.

                    If you’re going to work on the tutorial locally, instead open src/index.js in your project folder (you have already touched this file during the setup).

                    This Starter Code is the base of what we’re building. We’ve provided the CSS styling so that you only need to focus on learning React and programming the tic-tac-toe game.

                    By inspecting the code, you’ll notice that we have three React components:

                    Square
                    Board
                    Game
                    The Square component renders a single and the Board renders 9 squares.

                    The Game component renders a board with placeholder values which we’ll modify later.

                    There are currently no interactive components.

                    Passing Data Through Props
                    To get our feet wet, let’s try passing some data from our Board component to our Square component.

                    We strongly recommend typing code by hand as you’re working through the tutorial and not using copy/paste.

                    This will help you develop muscle memory and a stronger understanding.

                    In Board’s renderSquare method, change the code to pass a prop called value to the Square:
                </p>

                <p>What Are We Building?
                    In this tutorial, we’ll show how to build an interactive tic-tac-toe game with React.

                    You can see what we’ll be building here: Final Result.

                    If the code doesn’t make sense to you, or if you are unfamiliar with the code’s syntax, don’t worry!

                    The goal of this tutorial is to help you understand React and its syntax.

                    We recommend that you check out the tic-tac-toe game before continuing with the tutorial.

                    One of the features that you’ll notice is that there is a numbered list to the right of the game’s board.

                    This list gives you a history of all of the moves that have occurred in the game, and it is updated as the game progresses.

                    You can close the tic-tac-toe game once you’re familiar with it. We’ll be starting from a simpler template in this tutorial.

                    Our next step is to set you up so that you can start building the game.

                    Prerequisites
                    We’ll assume that you have some familiarity with HTML and JavaScript,
                    but you should be able to follow along even if you’re coming from a different programming language.

                    We’ll also assume that you’re familiar with programming concepts like functions, objects, arrays, and to a lesser extent, classes.

                    If you need to review JavaScript, we recommend reading this guide.

                    Note that we’re also using some features from ES6 — a recent version of JavaScript. In this tutorial, we’re using arrow functions, classes, let, and const statements.

                    You can use the Babel REPL to check what ES6 code compiles to.

                    Setup for the Tutorial
                    There are two ways to complete this tutorial:
                    you can either write the code in your browser, or you can set up a local development environment on your computer.

                    Setup Option 1: Write Code in the Browser
                    This is the quickest way to get started!

                    First, open this Starter Code in a new tab.

                    The new tab should display an empty tic-tac-toe game board and React code. We will be editing the React code in this tutorial.

                    You can now skip the second setup option, and go to the Overview section to get an overview of React.

                    Setup Option 2: Local Development Environment
                    This is completely optional and not required for this tutorial!


                    Optional: Instructions for following along locally using your preferred text editor
                    Help, I’m Stuck!
                    If you get stuck, check out the community support resources.

                    In particular, Reactiflux Chat is a great way to get help quickly.

                    If you don’t receive an answer, or if you remain stuck,
                    please file an issue, and we’ll help you out.

                    Overview
                    Now that you’re set up, let’s get an overview of React!

                    What Is React?
                    React is a declarative, efficient, and flexible JavaScript library for building user interfaces.

                    It lets you compose complex UIs from small and isolated pieces of code called “components”.

                    React has a few different kinds of components, but we’ll start with React.Component subclasses:

                    We’ll get to the funny XML-like tags soon. We use components to tell React what we want to see on the screen.

                    When our data changes, React will efficiently update and re-render our components.

                    Here, ShoppingList is a React component class, or React component type. A component takes in parameters,
                    called props (short for “properties”), and returns a hierarchy of views to display via the render method.

                    The render method returns a description of what you want to see on the screen.

                    React takes the description and displays the result.

                    In particular, render returns a React element, which is a lightweight description of what to render.

                    Most React developers use a special syntax called “JSX” which makes these structures easier to write.

                    The div syntax is transformed at build time to React.createElement('div').

                    The example above is equivalent to:

                    See full expanded version.

                    If you’re curious, createElement() is described in more detail in the API reference,
                    but we won’t be using it in this tutorial.

                    Instead, we will keep using JSX.

                    JSX comes with the full power of JavaScript. You can put any JavaScript expressions within braces inside JSX.

                    Each React element is a JavaScript object that you can store in a variable or pass around in your program.

                    The ShoppingList component above only renders built-in DOM components like and .

                    But you can compose and render custom React components too.

                    For example, we can now refer to the whole shopping list by writing ShoppingList.

                    Each React component is encapsulated and can operate independently;
                    this allows you to build complex UIs from simple components.

                    Inspecting the Starter Code

                    If you’re going to work on the tutorial in your browser, open this code in a new tab: Starter Code.

                    If you’re going to work on the tutorial locally, instead open src/index.js in your project folder (you have already touched this file during the setup).

                    This Starter Code is the base of what we’re building. We’ve provided the CSS styling so that you only need to focus on learning React and programming the tic-tac-toe game.

                    By inspecting the code, you’ll notice that we have three React components:

                    Square
                    Board
                    Game
                    The Square component renders a single and the Board renders 9 squares.

                    The Game component renders a board with placeholder values which we’ll modify later.

                    There are currently no interactive components.

                    Passing Data Through Props
                    To get our feet wet, let’s try passing some data from our Board component to our Square component.

                    We strongly recommend typing code by hand as you’re working through the tutorial and not using copy/paste.

                    This will help you develop muscle memory and a stronger understanding.

                    In Board’s renderSquare method, change the code to pass a prop called value to the Square:
                </p>

                <p>What Are We Building?
                    In this tutorial, we’ll show how to build an interactive tic-tac-toe game with React.

                    You can see what we’ll be building here: Final Result.

                    If the code doesn’t make sense to you, or if you are unfamiliar with the code’s syntax, don’t worry!

                    The goal of this tutorial is to help you understand React and its syntax.

                    We recommend that you check out the tic-tac-toe game before continuing with the tutorial.

                    One of the features that you’ll notice is that there is a numbered list to the right of the game’s board.

                    This list gives you a history of all of the moves that have occurred in the game, and it is updated as the game progresses.

                    You can close the tic-tac-toe game once you’re familiar with it. We’ll be starting from a simpler template in this tutorial.

                    Our next step is to set you up so that you can start building the game.

                    Prerequisites
                    We’ll assume that you have some familiarity with HTML and JavaScript,
                    but you should be able to follow along even if you’re coming from a different programming language.

                    We’ll also assume that you’re familiar with programming concepts like functions, objects, arrays, and to a lesser extent, classes.

                    If you need to review JavaScript, we recommend reading this guide.

                    Note that we’re also using some features from ES6 — a recent version of JavaScript. In this tutorial, we’re using arrow functions, classes, let, and const statements.

                    You can use the Babel REPL to check what ES6 code compiles to.

                    Setup for the Tutorial
                    There are two ways to complete this tutorial:
                    you can either write the code in your browser, or you can set up a local development environment on your computer.

                    Setup Option 1: Write Code in the Browser
                    This is the quickest way to get started!

                    First, open this Starter Code in a new tab.

                    The new tab should display an empty tic-tac-toe game board and React code. We will be editing the React code in this tutorial.

                    You can now skip the second setup option, and go to the Overview section to get an overview of React.

                    Setup Option 2: Local Development Environment
                    This is completely optional and not required for this tutorial!


                    Optional: Instructions for following along locally using your preferred text editor
                    Help, I’m Stuck!
                    If you get stuck, check out the community support resources.

                    In particular, Reactiflux Chat is a great way to get help quickly.

                    If you don’t receive an answer, or if you remain stuck,
                    please file an issue, and we’ll help you out.

                    Overview
                    Now that you’re set up, let’s get an overview of React!

                    What Is React?
                    React is a declarative, efficient, and flexible JavaScript library for building user interfaces.

                    It lets you compose complex UIs from small and isolated pieces of code called “components”.

                    React has a few different kinds of components, but we’ll start with React.Component subclasses:

                    We’ll get to the funny XML-like tags soon. We use components to tell React what we want to see on the screen.

                    When our data changes, React will efficiently update and re-render our components.

                    Here, ShoppingList is a React component class, or React component type. A component takes in parameters,
                    called props (short for “properties”), and returns a hierarchy of views to display via the render method.

                    The render method returns a description of what you want to see on the screen.

                    React takes the description and displays the result.

                    In particular, render returns a React element, which is a lightweight description of what to render.

                    Most React developers use a special syntax called “JSX” which makes these structures easier to write.

                    The div syntax is transformed at build time to React.createElement('div').

                    The example above is equivalent to:

                    See full expanded version.

                    If you’re curious, createElement() is described in more detail in the API reference,
                    but we won’t be using it in this tutorial.

                    Instead, we will keep using JSX.

                    JSX comes with the full power of JavaScript. You can put any JavaScript expressions within braces inside JSX.

                    Each React element is a JavaScript object that you can store in a variable or pass around in your program.

                    The ShoppingList component above only renders built-in DOM components like and .

                    But you can compose and render custom React components too.

                    For example, we can now refer to the whole shopping list by writing ShoppingList.

                    Each React component is encapsulated and can operate independently;
                    this allows you to build complex UIs from simple components.

                    Inspecting the Starter Code

                    If you’re going to work on the tutorial in your browser, open this code in a new tab: Starter Code.

                    If you’re going to work on the tutorial locally, instead open src/index.js in your project folder (you have already touched this file during the setup).

                    This Starter Code is the base of what we’re building. We’ve provided the CSS styling so that you only need to focus on learning React and programming the tic-tac-toe game.

                    By inspecting the code, you’ll notice that we have three React components:

                    Square
                    Board
                    Game
                    The Square component renders a single and the Board renders 9 squares.

                    The Game component renders a board with placeholder values which we’ll modify later.

                    There are currently no interactive components.

                    Passing Data Through Props
                    To get our feet wet, let’s try passing some data from our Board component to our Square component.

                    We strongly recommend typing code by hand as you’re working through the tutorial and not using copy/paste.

                    This will help you develop muscle memory and a stronger understanding.

                    In Board’s renderSquare method, change the code to pass a prop called value to the Square:
                </p>

                <p>What Are We Building?
                    In this tutorial, we’ll show how to build an interactive tic-tac-toe game with React.

                    You can see what we’ll be building here: Final Result.

                    If the code doesn’t make sense to you, or if you are unfamiliar with the code’s syntax, don’t worry!

                    The goal of this tutorial is to help you understand React and its syntax.

                    We recommend that you check out the tic-tac-toe game before continuing with the tutorial.

                    One of the features that you’ll notice is that there is a numbered list to the right of the game’s board.

                    This list gives you a history of all of the moves that have occurred in the game, and it is updated as the game progresses.

                    You can close the tic-tac-toe game once you’re familiar with it. We’ll be starting from a simpler template in this tutorial.

                    Our next step is to set you up so that you can start building the game.

                    Prerequisites
                    We’ll assume that you have some familiarity with HTML and JavaScript,
                    but you should be able to follow along even if you’re coming from a different programming language.

                    We’ll also assume that you’re familiar with programming concepts like functions, objects, arrays, and to a lesser extent, classes.

                    If you need to review JavaScript, we recommend reading this guide.

                    Note that we’re also using some features from ES6 — a recent version of JavaScript. In this tutorial, we’re using arrow functions, classes, let, and const statements.

                    You can use the Babel REPL to check what ES6 code compiles to.

                    Setup for the Tutorial
                    There are two ways to complete this tutorial:
                    you can either write the code in your browser, or you can set up a local development environment on your computer.

                    Setup Option 1: Write Code in the Browser
                    This is the quickest way to get started!

                    First, open this Starter Code in a new tab.

                    The new tab should display an empty tic-tac-toe game board and React code. We will be editing the React code in this tutorial.

                    You can now skip the second setup option, and go to the Overview section to get an overview of React.

                    Setup Option 2: Local Development Environment
                    This is completely optional and not required for this tutorial!


                    Optional: Instructions for following along locally using your preferred text editor
                    Help, I’m Stuck!
                    If you get stuck, check out the community support resources.

                    In particular, Reactiflux Chat is a great way to get help quickly.

                    If you don’t receive an answer, or if you remain stuck,
                    please file an issue, and we’ll help you out.

                    Overview
                    Now that you’re set up, let’s get an overview of React!

                    What Is React?
                    React is a declarative, efficient, and flexible JavaScript library for building user interfaces.

                    It lets you compose complex UIs from small and isolated pieces of code called “components”.

                    React has a few different kinds of components, but we’ll start with React.Component subclasses:

                    We’ll get to the funny XML-like tags soon. We use components to tell React what we want to see on the screen.

                    When our data changes, React will efficiently update and re-render our components.

                    Here, ShoppingList is a React component class, or React component type. A component takes in parameters,
                    called props (short for “properties”), and returns a hierarchy of views to display via the render method.

                    The render method returns a description of what you want to see on the screen.

                    React takes the description and displays the result.

                    In particular, render returns a React element, which is a lightweight description of what to render.

                    Most React developers use a special syntax called “JSX” which makes these structures easier to write.

                    The div syntax is transformed at build time to React.createElement('div').

                    The example above is equivalent to:

                    See full expanded version.

                    If you’re curious, createElement() is described in more detail in the API reference,
                    but we won’t be using it in this tutorial.

                    Instead, we will keep using JSX.

                    JSX comes with the full power of JavaScript. You can put any JavaScript expressions within braces inside JSX.

                    Each React element is a JavaScript object that you can store in a variable or pass around in your program.

                    The ShoppingList component above only renders built-in DOM components like and .

                    But you can compose and render custom React components too.

                    For example, we can now refer to the whole shopping list by writing ShoppingList.

                    Each React component is encapsulated and can operate independently;
                    this allows you to build complex UIs from simple components.

                    Inspecting the Starter Code

                    If you’re going to work on the tutorial in your browser, open this code in a new tab: Starter Code.

                    If you’re going to work on the tutorial locally, instead open src/index.js in your project folder (you have already touched this file during the setup).

                    This Starter Code is the base of what we’re building. We’ve provided the CSS styling so that you only need to focus on learning React and programming the tic-tac-toe game.

                    By inspecting the code, you’ll notice that we have three React components:

                    Square
                    Board
                    Game
                    The Square component renders a single and the Board renders 9 squares.

                    The Game component renders a board with placeholder values which we’ll modify later.

                    There are currently no interactive components.

                    Passing Data Through Props
                    To get our feet wet, let’s try passing some data from our Board component to our Square component.

                    We strongly recommend typing code by hand as you’re working through the tutorial and not using copy/paste.

                    This will help you develop muscle memory and a stronger understanding.

                    In Board’s renderSquare method, change the code to pass a prop called value to the Square:
                </p>

                <p>What Are We Building?
                    In this tutorial, we’ll show how to build an interactive tic-tac-toe game with React.

                    You can see what we’ll be building here: Final Result.

                    If the code doesn’t make sense to you, or if you are unfamiliar with the code’s syntax, don’t worry!

                    The goal of this tutorial is to help you understand React and its syntax.

                    We recommend that you check out the tic-tac-toe game before continuing with the tutorial.

                    One of the features that you’ll notice is that there is a numbered list to the right of the game’s board.

                    This list gives you a history of all of the moves that have occurred in the game, and it is updated as the game progresses.

                    You can close the tic-tac-toe game once you’re familiar with it. We’ll be starting from a simpler template in this tutorial.

                    Our next step is to set you up so that you can start building the game.

                    Prerequisites
                    We’ll assume that you have some familiarity with HTML and JavaScript,
                    but you should be able to follow along even if you’re coming from a different programming language.

                    We’ll also assume that you’re familiar with programming concepts like functions, objects, arrays, and to a lesser extent, classes.

                    If you need to review JavaScript, we recommend reading this guide.

                    Note that we’re also using some features from ES6 — a recent version of JavaScript. In this tutorial, we’re using arrow functions, classes, let, and const statements.

                    You can use the Babel REPL to check what ES6 code compiles to.

                    Setup for the Tutorial
                    There are two ways to complete this tutorial:
                    you can either write the code in your browser, or you can set up a local development environment on your computer.

                    Setup Option 1: Write Code in the Browser
                    This is the quickest way to get started!

                    First, open this Starter Code in a new tab.

                    The new tab should display an empty tic-tac-toe game board and React code. We will be editing the React code in this tutorial.

                    You can now skip the second setup option, and go to the Overview section to get an overview of React.

                    Setup Option 2: Local Development Environment
                    This is completely optional and not required for this tutorial!


                    Optional: Instructions for following along locally using your preferred text editor
                    Help, I’m Stuck!
                    If you get stuck, check out the community support resources.

                    In particular, Reactiflux Chat is a great way to get help quickly.

                    If you don’t receive an answer, or if you remain stuck,
                    please file an issue, and we’ll help you out.

                    Overview
                    Now that you’re set up, let’s get an overview of React!

                    What Is React?
                    React is a declarative, efficient, and flexible JavaScript library for building user interfaces.

                    It lets you compose complex UIs from small and isolated pieces of code called “components”.

                    React has a few different kinds of components, but we’ll start with React.Component subclasses:

                    We’ll get to the funny XML-like tags soon. We use components to tell React what we want to see on the screen.

                    When our data changes, React will efficiently update and re-render our components.

                    Here, ShoppingList is a React component class, or React component type. A component takes in parameters,
                    called props (short for “properties”), and returns a hierarchy of views to display via the render method.

                    The render method returns a description of what you want to see on the screen.

                    React takes the description and displays the result.

                    In particular, render returns a React element, which is a lightweight description of what to render.

                    Most React developers use a special syntax called “JSX” which makes these structures easier to write.

                    The div syntax is transformed at build time to React.createElement('div').

                    The example above is equivalent to:

                    See full expanded version.

                    If you’re curious, createElement() is described in more detail in the API reference,
                    but we won’t be using it in this tutorial.

                    Instead, we will keep using JSX.

                    JSX comes with the full power of JavaScript. You can put any JavaScript expressions within braces inside JSX.

                    Each React element is a JavaScript object that you can store in a variable or pass around in your program.

                    The ShoppingList component above only renders built-in DOM components like and .

                    But you can compose and render custom React components too.

                    For example, we can now refer to the whole shopping list by writing ShoppingList.

                    Each React component is encapsulated and can operate independently;
                    this allows you to build complex UIs from simple components.

                    Inspecting the Starter Code

                    If you’re going to work on the tutorial in your browser, open this code in a new tab: Starter Code.

                    If you’re going to work on the tutorial locally, instead open src/index.js in your project folder (you have already touched this file during the setup).

                    This Starter Code is the base of what we’re building. We’ve provided the CSS styling so that you only need to focus on learning React and programming the tic-tac-toe game.

                    By inspecting the code, you’ll notice that we have three React components:

                    Square
                    Board
                    Game
                    The Square component renders a single and the Board renders 9 squares.

                    The Game component renders a board with placeholder values which we’ll modify later.

                    There are currently no interactive components.

                    Passing Data Through Props
                    To get our feet wet, let’s try passing some data from our Board component to our Square component.

                    We strongly recommend typing code by hand as you’re working through the tutorial and not using copy/paste.

                    This will help you develop muscle memory and a stronger understanding.

                    In Board’s renderSquare method, change the code to pass a prop called value to the Square:
                </p>

                <p>What Are We Building?
                    In this tutorial, we’ll show how to build an interactive tic-tac-toe game with React.

                    You can see what we’ll be building here: Final Result.

                    If the code doesn’t make sense to you, or if you are unfamiliar with the code’s syntax, don’t worry!

                    The goal of this tutorial is to help you understand React and its syntax.

                    We recommend that you check out the tic-tac-toe game before continuing with the tutorial.

                    One of the features that you’ll notice is that there is a numbered list to the right of the game’s board.

                    This list gives you a history of all of the moves that have occurred in the game, and it is updated as the game progresses.

                    You can close the tic-tac-toe game once you’re familiar with it. We’ll be starting from a simpler template in this tutorial.

                    Our next step is to set you up so that you can start building the game.

                    Prerequisites
                    We’ll assume that you have some familiarity with HTML and JavaScript,
                    but you should be able to follow along even if you’re coming from a different programming language.

                    We’ll also assume that you’re familiar with programming concepts like functions, objects, arrays, and to a lesser extent, classes.

                    If you need to review JavaScript, we recommend reading this guide.

                    Note that we’re also using some features from ES6 — a recent version of JavaScript. In this tutorial, we’re using arrow functions, classes, let, and const statements.

                    You can use the Babel REPL to check what ES6 code compiles to.

                    Setup for the Tutorial
                    There are two ways to complete this tutorial:
                    you can either write the code in your browser, or you can set up a local development environment on your computer.

                    Setup Option 1: Write Code in the Browser
                    This is the quickest way to get started!

                    First, open this Starter Code in a new tab.

                    The new tab should display an empty tic-tac-toe game board and React code. We will be editing the React code in this tutorial.

                    You can now skip the second setup option, and go to the Overview section to get an overview of React.

                    Setup Option 2: Local Development Environment
                    This is completely optional and not required for this tutorial!


                    Optional: Instructions for following along locally using your preferred text editor
                    Help, I’m Stuck!
                    If you get stuck, check out the community support resources.

                    In particular, Reactiflux Chat is a great way to get help quickly.

                    If you don’t receive an answer, or if you remain stuck,
                    please file an issue, and we’ll help you out.

                    Overview
                    Now that you’re set up, let’s get an overview of React!

                    What Is React?
                    React is a declarative, efficient, and flexible JavaScript library for building user interfaces.

                    It lets you compose complex UIs from small and isolated pieces of code called “components”.

                    React has a few different kinds of components, but we’ll start with React.Component subclasses:

                    We’ll get to the funny XML-like tags soon. We use components to tell React what we want to see on the screen.

                    When our data changes, React will efficiently update and re-render our components.

                    Here, ShoppingList is a React component class, or React component type. A component takes in parameters,
                    called props (short for “properties”), and returns a hierarchy of views to display via the render method.

                    The render method returns a description of what you want to see on the screen.

                    React takes the description and displays the result.

                    In particular, render returns a React element, which is a lightweight description of what to render.

                    Most React developers use a special syntax called “JSX” which makes these structures easier to write.

                    The div syntax is transformed at build time to React.createElement('div').

                    The example above is equivalent to:

                    See full expanded version.

                    If you’re curious, createElement() is described in more detail in the API reference,
                    but we won’t be using it in this tutorial.

                    Instead, we will keep using JSX.

                    JSX comes with the full power of JavaScript. You can put any JavaScript expressions within braces inside JSX.

                    Each React element is a JavaScript object that you can store in a variable or pass around in your program.

                    The ShoppingList component above only renders built-in DOM components like and .

                    But you can compose and render custom React components too.

                    For example, we can now refer to the whole shopping list by writing ShoppingList.

                    Each React component is encapsulated and can operate independently;
                    this allows you to build complex UIs from simple components.

                    Inspecting the Starter Code

                    If you’re going to work on the tutorial in your browser, open this code in a new tab: Starter Code.

                    If you’re going to work on the tutorial locally, instead open src/index.js in your project folder (you have already touched this file during the setup).

                    This Starter Code is the base of what we’re building. We’ve provided the CSS styling so that you only need to focus on learning React and programming the tic-tac-toe game.

                    By inspecting the code, you’ll notice that we have three React components:

                    Square
                    Board
                    Game
                    The Square component renders a single and the Board renders 9 squares.

                    The Game component renders a board with placeholder values which we’ll modify later.

                    There are currently no interactive components.

                    Passing Data Through Props
                    To get our feet wet, let’s try passing some data from our Board component to our Square component.

                    We strongly recommend typing code by hand as you’re working through the tutorial and not using copy/paste.

                    This will help you develop muscle memory and a stronger understanding.

                    In Board’s renderSquare method, change the code to pass a prop called value to the Square:
                </p>

                <p>What Are We Building?
                    In this tutorial, we’ll show how to build an interactive tic-tac-toe game with React.

                    You can see what we’ll be building here: Final Result.

                    If the code doesn’t make sense to you, or if you are unfamiliar with the code’s syntax, don’t worry!

                    The goal of this tutorial is to help you understand React and its syntax.

                    We recommend that you check out the tic-tac-toe game before continuing with the tutorial.

                    One of the features that you’ll notice is that there is a numbered list to the right of the game’s board.

                    This list gives you a history of all of the moves that have occurred in the game, and it is updated as the game progresses.

                    You can close the tic-tac-toe game once you’re familiar with it. We’ll be starting from a simpler template in this tutorial.

                    Our next step is to set you up so that you can start building the game.

                    Prerequisites
                    We’ll assume that you have some familiarity with HTML and JavaScript,
                    but you should be able to follow along even if you’re coming from a different programming language.

                    We’ll also assume that you’re familiar with programming concepts like functions, objects, arrays, and to a lesser extent, classes.

                    If you need to review JavaScript, we recommend reading this guide.

                    Note that we’re also using some features from ES6 — a recent version of JavaScript. In this tutorial, we’re using arrow functions, classes, let, and const statements.

                    You can use the Babel REPL to check what ES6 code compiles to.

                    Setup for the Tutorial
                    There are two ways to complete this tutorial:
                    you can either write the code in your browser, or you can set up a local development environment on your computer.

                    Setup Option 1: Write Code in the Browser
                    This is the quickest way to get started!

                    First, open this Starter Code in a new tab.

                    The new tab should display an empty tic-tac-toe game board and React code. We will be editing the React code in this tutorial.

                    You can now skip the second setup option, and go to the Overview section to get an overview of React.

                    Setup Option 2: Local Development Environment
                    This is completely optional and not required for this tutorial!


                    Optional: Instructions for following along locally using your preferred text editor
                    Help, I’m Stuck!
                    If you get stuck, check out the community support resources.

                    In particular, Reactiflux Chat is a great way to get help quickly.

                    If you don’t receive an answer, or if you remain stuck,
                    please file an issue, and we’ll help you out.

                    Overview
                    Now that you’re set up, let’s get an overview of React!

                    What Is React?
                    React is a declarative, efficient, and flexible JavaScript library for building user interfaces.

                    It lets you compose complex UIs from small and isolated pieces of code called “components”.

                    React has a few different kinds of components, but we’ll start with React.Component subclasses:

                    We’ll get to the funny XML-like tags soon. We use components to tell React what we want to see on the screen.

                    When our data changes, React will efficiently update and re-render our components.

                    Here, ShoppingList is a React component class, or React component type. A component takes in parameters,
                    called props (short for “properties”), and returns a hierarchy of views to display via the render method.

                    The render method returns a description of what you want to see on the screen.

                    React takes the description and displays the result.

                    In particular, render returns a React element, which is a lightweight description of what to render.

                    Most React developers use a special syntax called “JSX” which makes these structures easier to write.

                    The div syntax is transformed at build time to React.createElement('div').

                    The example above is equivalent to:

                    See full expanded version.

                    If you’re curious, createElement() is described in more detail in the API reference,
                    but we won’t be using it in this tutorial.

                    Instead, we will keep using JSX.

                    JSX comes with the full power of JavaScript. You can put any JavaScript expressions within braces inside JSX.

                    Each React element is a JavaScript object that you can store in a variable or pass around in your program.

                    The ShoppingList component above only renders built-in DOM components like and .

                    But you can compose and render custom React components too.

                    For example, we can now refer to the whole shopping list by writing ShoppingList.

                    Each React component is encapsulated and can operate independently;
                    this allows you to build complex UIs from simple components.

                    Inspecting the Starter Code

                    If you’re going to work on the tutorial in your browser, open this code in a new tab: Starter Code.

                    If you’re going to work on the tutorial locally, instead open src/index.js in your project folder (you have already touched this file during the setup).

                    This Starter Code is the base of what we’re building. We’ve provided the CSS styling so that you only need to focus on learning React and programming the tic-tac-toe game.

                    By inspecting the code, you’ll notice that we have three React components:

                    Square
                    Board
                    Game
                    The Square component renders a single and the Board renders 9 squares.

                    The Game component renders a board with placeholder values which we’ll modify later.

                    There are currently no interactive components.

                    Passing Data Through Props
                    To get our feet wet, let’s try passing some data from our Board component to our Square component.

                    We strongly recommend typing code by hand as you’re working through the tutorial and not using copy/paste.

                    This will help you develop muscle memory and a stronger understanding.

                    In Board’s renderSquare method, change the code to pass a prop called value to the Square:
                </p>

                <p>What Are We Building?
                    In this tutorial, we’ll show how to build an interactive tic-tac-toe game with React.

                    You can see what we’ll be building here: Final Result.

                    If the code doesn’t make sense to you, or if you are unfamiliar with the code’s syntax, don’t worry!

                    The goal of this tutorial is to help you understand React and its syntax.

                    We recommend that you check out the tic-tac-toe game before continuing with the tutorial.

                    One of the features that you’ll notice is that there is a numbered list to the right of the game’s board.

                    This list gives you a history of all of the moves that have occurred in the game, and it is updated as the game progresses.

                    You can close the tic-tac-toe game once you’re familiar with it. We’ll be starting from a simpler template in this tutorial.

                    Our next step is to set you up so that you can start building the game.

                    Prerequisites
                    We’ll assume that you have some familiarity with HTML and JavaScript,
                    but you should be able to follow along even if you’re coming from a different programming language.

                    We’ll also assume that you’re familiar with programming concepts like functions, objects, arrays, and to a lesser extent, classes.

                    If you need to review JavaScript, we recommend reading this guide.

                    Note that we’re also using some features from ES6 — a recent version of JavaScript. In this tutorial, we’re using arrow functions, classes, let, and const statements.

                    You can use the Babel REPL to check what ES6 code compiles to.

                    Setup for the Tutorial
                    There are two ways to complete this tutorial:
                    you can either write the code in your browser, or you can set up a local development environment on your computer.

                    Setup Option 1: Write Code in the Browser
                    This is the quickest way to get started!

                    First, open this Starter Code in a new tab.

                    The new tab should display an empty tic-tac-toe game board and React code. We will be editing the React code in this tutorial.

                    You can now skip the second setup option, and go to the Overview section to get an overview of React.

                    Setup Option 2: Local Development Environment
                    This is completely optional and not required for this tutorial!


                    Optional: Instructions for following along locally using your preferred text editor
                    Help, I’m Stuck!
                    If you get stuck, check out the community support resources.

                    In particular, Reactiflux Chat is a great way to get help quickly.

                    If you don’t receive an answer, or if you remain stuck,
                    please file an issue, and we’ll help you out.

                    Overview
                    Now that you’re set up, let’s get an overview of React!

                    What Is React?
                    React is a declarative, efficient, and flexible JavaScript library for building user interfaces.

                    It lets you compose complex UIs from small and isolated pieces of code called “components”.

                    React has a few different kinds of components, but we’ll start with React.Component subclasses:

                    We’ll get to the funny XML-like tags soon. We use components to tell React what we want to see on the screen.

                    When our data changes, React will efficiently update and re-render our components.

                    Here, ShoppingList is a React component class, or React component type. A component takes in parameters,
                    called props (short for “properties”), and returns a hierarchy of views to display via the render method.

                    The render method returns a description of what you want to see on the screen.

                    React takes the description and displays the result.

                    In particular, render returns a React element, which is a lightweight description of what to render.

                    Most React developers use a special syntax called “JSX” which makes these structures easier to write.

                    The div syntax is transformed at build time to React.createElement('div').

                    The example above is equivalent to:

                    See full expanded version.

                    If you’re curious, createElement() is described in more detail in the API reference,
                    but we won’t be using it in this tutorial.

                    Instead, we will keep using JSX.

                    JSX comes with the full power of JavaScript. You can put any JavaScript expressions within braces inside JSX.

                    Each React element is a JavaScript object that you can store in a variable or pass around in your program.

                    The ShoppingList component above only renders built-in DOM components like and .

                    But you can compose and render custom React components too.

                    For example, we can now refer to the whole shopping list by writing ShoppingList.

                    Each React component is encapsulated and can operate independently;
                    this allows you to build complex UIs from simple components.

                    Inspecting the Starter Code

                    If you’re going to work on the tutorial in your browser, open this code in a new tab: Starter Code.

                    If you’re going to work on the tutorial locally, instead open src/index.js in your project folder (you have already touched this file during the setup).

                    This Starter Code is the base of what we’re building. We’ve provided the CSS styling so that you only need to focus on learning React and programming the tic-tac-toe game.

                    By inspecting the code, you’ll notice that we have three React components:

                    Square
                    Board
                    Game
                    The Square component renders a single and the Board renders 9 squares.

                    The Game component renders a board with placeholder values which we’ll modify later.

                    There are currently no interactive components.

                    Passing Data Through Props
                    To get our feet wet, let’s try passing some data from our Board component to our Square component.

                    We strongly recommend typing code by hand as you’re working through the tutorial and not using copy/paste.

                    This will help you develop muscle memory and a stronger understanding.

                    In Board’s renderSquare method, change the code to pass a prop called value to the Square:
                </p>

                <p>What Are We Building?
                    In this tutorial, we’ll show how to build an interactive tic-tac-toe game with React.

                    You can see what we’ll be building here: Final Result.

                    If the code doesn’t make sense to you, or if you are unfamiliar with the code’s syntax, don’t worry!

                    The goal of this tutorial is to help you understand React and its syntax.

                    We recommend that you check out the tic-tac-toe game before continuing with the tutorial.

                    One of the features that you’ll notice is that there is a numbered list to the right of the game’s board.

                    This list gives you a history of all of the moves that have occurred in the game, and it is updated as the game progresses.

                    You can close the tic-tac-toe game once you’re familiar with it. We’ll be starting from a simpler template in this tutorial.

                    Our next step is to set you up so that you can start building the game.

                    Prerequisites
                    We’ll assume that you have some familiarity with HTML and JavaScript,
                    but you should be able to follow along even if you’re coming from a different programming language.

                    We’ll also assume that you’re familiar with programming concepts like functions, objects, arrays, and to a lesser extent, classes.

                    If you need to review JavaScript, we recommend reading this guide.

                    Note that we’re also using some features from ES6 — a recent version of JavaScript. In this tutorial, we’re using arrow functions, classes, let, and const statements.

                    You can use the Babel REPL to check what ES6 code compiles to.

                    Setup for the Tutorial
                    There are two ways to complete this tutorial:
                    you can either write the code in your browser, or you can set up a local development environment on your computer.

                    Setup Option 1: Write Code in the Browser
                    This is the quickest way to get started!

                    First, open this Starter Code in a new tab.

                    The new tab should display an empty tic-tac-toe game board and React code. We will be editing the React code in this tutorial.

                    You can now skip the second setup option, and go to the Overview section to get an overview of React.

                    Setup Option 2: Local Development Environment
                    This is completely optional and not required for this tutorial!


                    Optional: Instructions for following along locally using your preferred text editor
                    Help, I’m Stuck!
                    If you get stuck, check out the community support resources.

                    In particular, Reactiflux Chat is a great way to get help quickly.

                    If you don’t receive an answer, or if you remain stuck,
                    please file an issue, and we’ll help you out.

                    Overview
                    Now that you’re set up, let’s get an overview of React!

                    What Is React?
                    React is a declarative, efficient, and flexible JavaScript library for building user interfaces.

                    It lets you compose complex UIs from small and isolated pieces of code called “components”.

                    React has a few different kinds of components, but we’ll start with React.Component subclasses:

                    We’ll get to the funny XML-like tags soon. We use components to tell React what we want to see on the screen.

                    When our data changes, React will efficiently update and re-render our components.

                    Here, ShoppingList is a React component class, or React component type. A component takes in parameters,
                    called props (short for “properties”), and returns a hierarchy of views to display via the render method.

                    The render method returns a description of what you want to see on the screen.

                    React takes the description and displays the result.

                    In particular, render returns a React element, which is a lightweight description of what to render.

                    Most React developers use a special syntax called “JSX” which makes these structures easier to write.

                    The div syntax is transformed at build time to React.createElement('div').

                    The example above is equivalent to:

                    See full expanded version.

                    If you’re curious, createElement() is described in more detail in the API reference,
                    but we won’t be using it in this tutorial.

                    Instead, we will keep using JSX.

                    JSX comes with the full power of JavaScript. You can put any JavaScript expressions within braces inside JSX.

                    Each React element is a JavaScript object that you can store in a variable or pass around in your program.

                    The ShoppingList component above only renders built-in DOM components like and .

                    But you can compose and render custom React components too.

                    For example, we can now refer to the whole shopping list by writing ShoppingList.

                    Each React component is encapsulated and can operate independently;
                    this allows you to build complex UIs from simple components.

                    Inspecting the Starter Code

                    If you’re going to work on the tutorial in your browser, open this code in a new tab: Starter Code.

                    If you’re going to work on the tutorial locally, instead open src/index.js in your project folder (you have already touched this file during the setup).

                    This Starter Code is the base of what we’re building. We’ve provided the CSS styling so that you only need to focus on learning React and programming the tic-tac-toe game.

                    By inspecting the code, you’ll notice that we have three React components:

                    Square
                    Board
                    Game
                    The Square component renders a single and the Board renders 9 squares.

                    The Game component renders a board with placeholder values which we’ll modify later.

                    There are currently no interactive components.

                    Passing Data Through Props
                    To get our feet wet, let’s try passing some data from our Board component to our Square component.

                    We strongly recommend typing code by hand as you’re working through the tutorial and not using copy/paste.

                    This will help you develop muscle memory and a stronger understanding.

                    In Board’s renderSquare method, change the code to pass a prop called value to the Square:
                </p>

                <p>What Are We Building?
                    In this tutorial, we’ll show how to build an interactive tic-tac-toe game with React.

                    You can see what we’ll be building here: Final Result.

                    If the code doesn’t make sense to you, or if you are unfamiliar with the code’s syntax, don’t worry!

                    The goal of this tutorial is to help you understand React and its syntax.

                    We recommend that you check out the tic-tac-toe game before continuing with the tutorial.

                    One of the features that you’ll notice is that there is a numbered list to the right of the game’s board.

                    This list gives you a history of all of the moves that have occurred in the game, and it is updated as the game progresses.

                    You can close the tic-tac-toe game once you’re familiar with it. We’ll be starting from a simpler template in this tutorial.

                    Our next step is to set you up so that you can start building the game.

                    Prerequisites
                    We’ll assume that you have some familiarity with HTML and JavaScript,
                    but you should be able to follow along even if you’re coming from a different programming language.

                    We’ll also assume that you’re familiar with programming concepts like functions, objects, arrays, and to a lesser extent, classes.

                    If you need to review JavaScript, we recommend reading this guide.

                    Note that we’re also using some features from ES6 — a recent version of JavaScript. In this tutorial, we’re using arrow functions, classes, let, and const statements.

                    You can use the Babel REPL to check what ES6 code compiles to.

                    Setup for the Tutorial
                    There are two ways to complete this tutorial:
                    you can either write the code in your browser, or you can set up a local development environment on your computer.

                    Setup Option 1: Write Code in the Browser
                    This is the quickest way to get started!

                    First, open this Starter Code in a new tab.

                    The new tab should display an empty tic-tac-toe game board and React code. We will be editing the React code in this tutorial.

                    You can now skip the second setup option, and go to the Overview section to get an overview of React.

                    Setup Option 2: Local Development Environment
                    This is completely optional and not required for this tutorial!


                    Optional: Instructions for following along locally using your preferred text editor
                    Help, I’m Stuck!
                    If you get stuck, check out the community support resources.

                    In particular, Reactiflux Chat is a great way to get help quickly.

                    If you don’t receive an answer, or if you remain stuck,
                    please file an issue, and we’ll help you out.

                    Overview
                    Now that you’re set up, let’s get an overview of React!

                    What Is React?
                    React is a declarative, efficient, and flexible JavaScript library for building user interfaces.

                    It lets you compose complex UIs from small and isolated pieces of code called “components”.

                    React has a few different kinds of components, but we’ll start with React.Component subclasses:

                    We’ll get to the funny XML-like tags soon. We use components to tell React what we want to see on the screen.

                    When our data changes, React will efficiently update and re-render our components.

                    Here, ShoppingList is a React component class, or React component type. A component takes in parameters,
                    called props (short for “properties”), and returns a hierarchy of views to display via the render method.

                    The render method returns a description of what you want to see on the screen.

                    React takes the description and displays the result.

                    In particular, render returns a React element, which is a lightweight description of what to render.

                    Most React developers use a special syntax called “JSX” which makes these structures easier to write.

                    The div syntax is transformed at build time to React.createElement('div').

                    The example above is equivalent to:

                    See full expanded version.

                    If you’re curious, createElement() is described in more detail in the API reference,
                    but we won’t be using it in this tutorial.

                    Instead, we will keep using JSX.

                    JSX comes with the full power of JavaScript. You can put any JavaScript expressions within braces inside JSX.

                    Each React element is a JavaScript object that you can store in a variable or pass around in your program.

                    The ShoppingList component above only renders built-in DOM components like and .

                    But you can compose and render custom React components too.

                    For example, we can now refer to the whole shopping list by writing ShoppingList.

                    Each React component is encapsulated and can operate independently;
                    this allows you to build complex UIs from simple components.

                    Inspecting the Starter Code

                    If you’re going to work on the tutorial in your browser, open this code in a new tab: Starter Code.

                    If you’re going to work on the tutorial locally, instead open src/index.js in your project folder (you have already touched this file during the setup).

                    This Starter Code is the base of what we’re building. We’ve provided the CSS styling so that you only need to focus on learning React and programming the tic-tac-toe game.

                    By inspecting the code, you’ll notice that we have three React components:

                    Square
                    Board
                    Game
                    The Square component renders a single and the Board renders 9 squares.

                    The Game component renders a board with placeholder values which we’ll modify later.

                    There are currently no interactive components.

                    Passing Data Through Props
                    To get our feet wet, let’s try passing some data from our Board component to our Square component.

                    We strongly recommend typing code by hand as you’re working through the tutorial and not using copy/paste.

                    This will help you develop muscle memory and a stronger understanding.

                    In Board’s renderSquare method, change the code to pass a prop called value to the Square:
                </p>

                <p>What Are We Building?
                    In this tutorial, we’ll show how to build an interactive tic-tac-toe game with React.

                    You can see what we’ll be building here: Final Result.

                    If the code doesn’t make sense to you, or if you are unfamiliar with the code’s syntax, don’t worry!

                    The goal of this tutorial is to help you understand React and its syntax.

                    We recommend that you check out the tic-tac-toe game before continuing with the tutorial.

                    One of the features that you’ll notice is that there is a numbered list to the right of the game’s board.

                    This list gives you a history of all of the moves that have occurred in the game, and it is updated as the game progresses.

                    You can close the tic-tac-toe game once you’re familiar with it. We’ll be starting from a simpler template in this tutorial.

                    Our next step is to set you up so that you can start building the game.

                    Prerequisites
                    We’ll assume that you have some familiarity with HTML and JavaScript,
                    but you should be able to follow along even if you’re coming from a different programming language.

                    We’ll also assume that you’re familiar with programming concepts like functions, objects, arrays, and to a lesser extent, classes.

                    If you need to review JavaScript, we recommend reading this guide.

                    Note that we’re also using some features from ES6 — a recent version of JavaScript. In this tutorial, we’re using arrow functions, classes, let, and const statements.

                    You can use the Babel REPL to check what ES6 code compiles to.

                    Setup for the Tutorial
                    There are two ways to complete this tutorial:
                    you can either write the code in your browser, or you can set up a local development environment on your computer.

                    Setup Option 1: Write Code in the Browser
                    This is the quickest way to get started!

                    First, open this Starter Code in a new tab.

                    The new tab should display an empty tic-tac-toe game board and React code. We will be editing the React code in this tutorial.

                    You can now skip the second setup option, and go to the Overview section to get an overview of React.

                    Setup Option 2: Local Development Environment
                    This is completely optional and not required for this tutorial!


                    Optional: Instructions for following along locally using your preferred text editor
                    Help, I’m Stuck!
                    If you get stuck, check out the community support resources.

                    In particular, Reactiflux Chat is a great way to get help quickly.

                    If you don’t receive an answer, or if you remain stuck,
                    please file an issue, and we’ll help you out.

                    Overview
                    Now that you’re set up, let’s get an overview of React!

                    What Is React?
                    React is a declarative, efficient, and flexible JavaScript library for building user interfaces.

                    It lets you compose complex UIs from small and isolated pieces of code called “components”.

                    React has a few different kinds of components, but we’ll start with React.Component subclasses:

                    We’ll get to the funny XML-like tags soon. We use components to tell React what we want to see on the screen.

                    When our data changes, React will efficiently update and re-render our components.

                    Here, ShoppingList is a React component class, or React component type. A component takes in parameters,
                    called props (short for “properties”), and returns a hierarchy of views to display via the render method.

                    The render method returns a description of what you want to see on the screen.

                    React takes the description and displays the result.

                    In particular, render returns a React element, which is a lightweight description of what to render.

                    Most React developers use a special syntax called “JSX” which makes these structures easier to write.

                    The div syntax is transformed at build time to React.createElement('div').

                    The example above is equivalent to:

                    See full expanded version.

                    If you’re curious, createElement() is described in more detail in the API reference,
                    but we won’t be using it in this tutorial.

                    Instead, we will keep using JSX.

                    JSX comes with the full power of JavaScript. You can put any JavaScript expressions within braces inside JSX.

                    Each React element is a JavaScript object that you can store in a variable or pass around in your program.

                    The ShoppingList component above only renders built-in DOM components like and .

                    But you can compose and render custom React components too.

                    For example, we can now refer to the whole shopping list by writing ShoppingList.

                    Each React component is encapsulated and can operate independently;
                    this allows you to build complex UIs from simple components.

                    Inspecting the Starter Code

                    If you’re going to work on the tutorial in your browser, open this code in a new tab: Starter Code.

                    If you’re going to work on the tutorial locally, instead open src/index.js in your project folder (you have already touched this file during the setup).

                    This Starter Code is the base of what we’re building. We’ve provided the CSS styling so that you only need to focus on learning React and programming the tic-tac-toe game.

                    By inspecting the code, you’ll notice that we have three React components:

                    Square
                    Board
                    Game
                    The Square component renders a single and the Board renders 9 squares.

                    The Game component renders a board with placeholder values which we’ll modify later.

                    There are currently no interactive components.

                    Passing Data Through Props
                    To get our feet wet, let’s try passing some data from our Board component to our Square component.

                    We strongly recommend typing code by hand as you’re working through the tutorial and not using copy/paste.

                    This will help you develop muscle memory and a stronger understanding.

                    In Board’s renderSquare method, change the code to pass a prop called value to the Square:
                </p>

                <p>What Are We Building?
                    In this tutorial, we’ll show how to build an interactive tic-tac-toe game with React.

                    You can see what we’ll be building here: Final Result.

                    If the code doesn’t make sense to you, or if you are unfamiliar with the code’s syntax, don’t worry!

                    The goal of this tutorial is to help you understand React and its syntax.

                    We recommend that you check out the tic-tac-toe game before continuing with the tutorial.

                    One of the features that you’ll notice is that there is a numbered list to the right of the game’s board.

                    This list gives you a history of all of the moves that have occurred in the game, and it is updated as the game progresses.

                    You can close the tic-tac-toe game once you’re familiar with it. We’ll be starting from a simpler template in this tutorial.

                    Our next step is to set you up so that you can start building the game.

                    Prerequisites
                    We’ll assume that you have some familiarity with HTML and JavaScript,
                    but you should be able to follow along even if you’re coming from a different programming language.

                    We’ll also assume that you’re familiar with programming concepts like functions, objects, arrays, and to a lesser extent, classes.

                    If you need to review JavaScript, we recommend reading this guide.

                    Note that we’re also using some features from ES6 — a recent version of JavaScript. In this tutorial, we’re using arrow functions, classes, let, and const statements.

                    You can use the Babel REPL to check what ES6 code compiles to.

                    Setup for the Tutorial
                    There are two ways to complete this tutorial:
                    you can either write the code in your browser, or you can set up a local development environment on your computer.

                    Setup Option 1: Write Code in the Browser
                    This is the quickest way to get started!

                    First, open this Starter Code in a new tab.

                    The new tab should display an empty tic-tac-toe game board and React code. We will be editing the React code in this tutorial.

                    You can now skip the second setup option, and go to the Overview section to get an overview of React.

                    Setup Option 2: Local Development Environment
                    This is completely optional and not required for this tutorial!


                    Optional: Instructions for following along locally using your preferred text editor
                    Help, I’m Stuck!
                    If you get stuck, check out the community support resources.

                    In particular, Reactiflux Chat is a great way to get help quickly.

                    If you don’t receive an answer, or if you remain stuck,
                    please file an issue, and we’ll help you out.

                    Overview
                    Now that you’re set up, let’s get an overview of React!

                    What Is React?
                    React is a declarative, efficient, and flexible JavaScript library for building user interfaces.

                    It lets you compose complex UIs from small and isolated pieces of code called “components”.

                    React has a few different kinds of components, but we’ll start with React.Component subclasses:

                    We’ll get to the funny XML-like tags soon. We use components to tell React what we want to see on the screen.

                    When our data changes, React will efficiently update and re-render our components.

                    Here, ShoppingList is a React component class, or React component type. A component takes in parameters,
                    called props (short for “properties”), and returns a hierarchy of views to display via the render method.

                    The render method returns a description of what you want to see on the screen.

                    React takes the description and displays the result.

                    In particular, render returns a React element, which is a lightweight description of what to render.

                    Most React developers use a special syntax called “JSX” which makes these structures easier to write.

                    The div syntax is transformed at build time to React.createElement('div').

                    The example above is equivalent to:

                    See full expanded version.

                    If you’re curious, createElement() is described in more detail in the API reference,
                    but we won’t be using it in this tutorial.

                    Instead, we will keep using JSX.

                    JSX comes with the full power of JavaScript. You can put any JavaScript expressions within braces inside JSX.

                    Each React element is a JavaScript object that you can store in a variable or pass around in your program.

                    The ShoppingList component above only renders built-in DOM components like and .

                    But you can compose and render custom React components too.

                    For example, we can now refer to the whole shopping list by writing ShoppingList.

                    Each React component is encapsulated and can operate independently;
                    this allows you to build complex UIs from simple components.

                    Inspecting the Starter Code

                    If you’re going to work on the tutorial in your browser, open this code in a new tab: Starter Code.

                    If you’re going to work on the tutorial locally, instead open src/index.js in your project folder (you have already touched this file during the setup).

                    This Starter Code is the base of what we’re building. We’ve provided the CSS styling so that you only need to focus on learning React and programming the tic-tac-toe game.

                    By inspecting the code, you’ll notice that we have three React components:

                    Square
                    Board
                    Game
                    The Square component renders a single and the Board renders 9 squares.

                    The Game component renders a board with placeholder values which we’ll modify later.

                    There are currently no interactive components.

                    Passing Data Through Props
                    To get our feet wet, let’s try passing some data from our Board component to our Square component.

                    We strongly recommend typing code by hand as you’re working through the tutorial and not using copy/paste.

                    This will help you develop muscle memory and a stronger understanding.

                    In Board’s renderSquare method, change the code to pass a prop called value to the Square:
                </p>

                <p>What Are We Building?
                    In this tutorial, we’ll show how to build an interactive tic-tac-toe game with React.

                    You can see what we’ll be building here: Final Result.

                    If the code doesn’t make sense to you, or if you are unfamiliar with the code’s syntax, don’t worry!

                    The goal of this tutorial is to help you understand React and its syntax.

                    We recommend that you check out the tic-tac-toe game before continuing with the tutorial.

                    One of the features that you’ll notice is that there is a numbered list to the right of the game’s board.

                    This list gives you a history of all of the moves that have occurred in the game, and it is updated as the game progresses.

                    You can close the tic-tac-toe game once you’re familiar with it. We’ll be starting from a simpler template in this tutorial.

                    Our next step is to set you up so that you can start building the game.

                    Prerequisites
                    We’ll assume that you have some familiarity with HTML and JavaScript,
                    but you should be able to follow along even if you’re coming from a different programming language.

                    We’ll also assume that you’re familiar with programming concepts like functions, objects, arrays, and to a lesser extent, classes.

                    If you need to review JavaScript, we recommend reading this guide.

                    Note that we’re also using some features from ES6 — a recent version of JavaScript. In this tutorial, we’re using arrow functions, classes, let, and const statements.

                    You can use the Babel REPL to check what ES6 code compiles to.

                    Setup for the Tutorial
                    There are two ways to complete this tutorial:
                    you can either write the code in your browser, or you can set up a local development environment on your computer.

                    Setup Option 1: Write Code in the Browser
                    This is the quickest way to get started!

                    First, open this Starter Code in a new tab.

                    The new tab should display an empty tic-tac-toe game board and React code. We will be editing the React code in this tutorial.

                    You can now skip the second setup option, and go to the Overview section to get an overview of React.

                    Setup Option 2: Local Development Environment
                    This is completely optional and not required for this tutorial!


                    Optional: Instructions for following along locally using your preferred text editor
                    Help, I’m Stuck!
                    If you get stuck, check out the community support resources.

                    In particular, Reactiflux Chat is a great way to get help quickly.

                    If you don’t receive an answer, or if you remain stuck,
                    please file an issue, and we’ll help you out.

                    Overview
                    Now that you’re set up, let’s get an overview of React!

                    What Is React?
                    React is a declarative, efficient, and flexible JavaScript library for building user interfaces.

                    It lets you compose complex UIs from small and isolated pieces of code called “components”.

                    React has a few different kinds of components, but we’ll start with React.Component subclasses:

                    We’ll get to the funny XML-like tags soon. We use components to tell React what we want to see on the screen.

                    When our data changes, React will efficiently update and re-render our components.

                    Here, ShoppingList is a React component class, or React component type. A component takes in parameters,
                    called props (short for “properties”), and returns a hierarchy of views to display via the render method.

                    The render method returns a description of what you want to see on the screen.

                    React takes the description and displays the result.

                    In particular, render returns a React element, which is a lightweight description of what to render.

                    Most React developers use a special syntax called “JSX” which makes these structures easier to write.

                    The div syntax is transformed at build time to React.createElement('div').

                    The example above is equivalent to:

                    See full expanded version.

                    If you’re curious, createElement() is described in more detail in the API reference,
                    but we won’t be using it in this tutorial.

                    Instead, we will keep using JSX.

                    JSX comes with the full power of JavaScript. You can put any JavaScript expressions within braces inside JSX.

                    Each React element is a JavaScript object that you can store in a variable or pass around in your program.

                    The ShoppingList component above only renders built-in DOM components like and .

                    But you can compose and render custom React components too.

                    For example, we can now refer to the whole shopping list by writing ShoppingList.

                    Each React component is encapsulated and can operate independently;
                    this allows you to build complex UIs from simple components.

                    Inspecting the Starter Code

                    If you’re going to work on the tutorial in your browser, open this code in a new tab: Starter Code.

                    If you’re going to work on the tutorial locally, instead open src/index.js in your project folder (you have already touched this file during the setup).

                    This Starter Code is the base of what we’re building. We’ve provided the CSS styling so that you only need to focus on learning React and programming the tic-tac-toe game.

                    By inspecting the code, you’ll notice that we have three React components:

                    Square
                    Board
                    Game
                    The Square component renders a single and the Board renders 9 squares.

                    The Game component renders a board with placeholder values which we’ll modify later.

                    There are currently no interactive components.

                    Passing Data Through Props
                    To get our feet wet, let’s try passing some data from our Board component to our Square component.

                    We strongly recommend typing code by hand as you’re working through the tutorial and not using copy/paste.

                    This will help you develop muscle memory and a stronger understanding.

                    In Board’s renderSquare method, change the code to pass a prop called value to the Square:
                </p>

                <p>What Are We Building?
                    In this tutorial, we’ll show how to build an interactive tic-tac-toe game with React.

                    You can see what we’ll be building here: Final Result.

                    If the code doesn’t make sense to you, or if you are unfamiliar with the code’s syntax, don’t worry!

                    The goal of this tutorial is to help you understand React and its syntax.

                    We recommend that you check out the tic-tac-toe game before continuing with the tutorial.

                    One of the features that you’ll notice is that there is a numbered list to the right of the game’s board.

                    This list gives you a history of all of the moves that have occurred in the game, and it is updated as the game progresses.

                    You can close the tic-tac-toe game once you’re familiar with it. We’ll be starting from a simpler template in this tutorial.

                    Our next step is to set you up so that you can start building the game.

                    Prerequisites
                    We’ll assume that you have some familiarity with HTML and JavaScript,
                    but you should be able to follow along even if you’re coming from a different programming language.

                    We’ll also assume that you’re familiar with programming concepts like functions, objects, arrays, and to a lesser extent, classes.

                    If you need to review JavaScript, we recommend reading this guide.

                    Note that we’re also using some features from ES6 — a recent version of JavaScript. In this tutorial, we’re using arrow functions, classes, let, and const statements.

                    You can use the Babel REPL to check what ES6 code compiles to.

                    Setup for the Tutorial
                    There are two ways to complete this tutorial:
                    you can either write the code in your browser, or you can set up a local development environment on your computer.

                    Setup Option 1: Write Code in the Browser
                    This is the quickest way to get started!

                    First, open this Starter Code in a new tab.

                    The new tab should display an empty tic-tac-toe game board and React code. We will be editing the React code in this tutorial.

                    You can now skip the second setup option, and go to the Overview section to get an overview of React.

                    Setup Option 2: Local Development Environment
                    This is completely optional and not required for this tutorial!


                    Optional: Instructions for following along locally using your preferred text editor
                    Help, I’m Stuck!
                    If you get stuck, check out the community support resources.

                    In particular, Reactiflux Chat is a great way to get help quickly.

                    If you don’t receive an answer, or if you remain stuck,
                    please file an issue, and we’ll help you out.

                    Overview
                    Now that you’re set up, let’s get an overview of React!

                    What Is React?
                    React is a declarative, efficient, and flexible JavaScript library for building user interfaces.

                    It lets you compose complex UIs from small and isolated pieces of code called “components”.

                    React has a few different kinds of components, but we’ll start with React.Component subclasses:

                    We’ll get to the funny XML-like tags soon. We use components to tell React what we want to see on the screen.

                    When our data changes, React will efficiently update and re-render our components.

                    Here, ShoppingList is a React component class, or React component type. A component takes in parameters,
                    called props (short for “properties”), and returns a hierarchy of views to display via the render method.

                    The render method returns a description of what you want to see on the screen.

                    React takes the description and displays the result.

                    In particular, render returns a React element, which is a lightweight description of what to render.

                    Most React developers use a special syntax called “JSX” which makes these structures easier to write.

                    The div syntax is transformed at build time to React.createElement('div').

                    The example above is equivalent to:

                    See full expanded version.

                    If you’re curious, createElement() is described in more detail in the API reference,
                    but we won’t be using it in this tutorial.

                    Instead, we will keep using JSX.

                    JSX comes with the full power of JavaScript. You can put any JavaScript expressions within braces inside JSX.

                    Each React element is a JavaScript object that you can store in a variable or pass around in your program.

                    The ShoppingList component above only renders built-in DOM components like and .

                    But you can compose and render custom React components too.

                    For example, we can now refer to the whole shopping list by writing ShoppingList.

                    Each React component is encapsulated and can operate independently;
                    this allows you to build complex UIs from simple components.

                    Inspecting the Starter Code

                    If you’re going to work on the tutorial in your browser, open this code in a new tab: Starter Code.

                    If you’re going to work on the tutorial locally, instead open src/index.js in your project folder (you have already touched this file during the setup).

                    This Starter Code is the base of what we’re building. We’ve provided the CSS styling so that you only need to focus on learning React and programming the tic-tac-toe game.

                    By inspecting the code, you’ll notice that we have three React components:

                    Square
                    Board
                    Game
                    The Square component renders a single and the Board renders 9 squares.

                    The Game component renders a board with placeholder values which we’ll modify later.

                    There are currently no interactive components.

                    Passing Data Through Props
                    To get our feet wet, let’s try passing some data from our Board component to our Square component.

                    We strongly recommend typing code by hand as you’re working through the tutorial and not using copy/paste.

                    This will help you develop muscle memory and a stronger understanding.

                    In Board’s renderSquare method, change the code to pass a prop called value to the Square:
                </p>

                <p>What Are We Building?
                    In this tutorial, we’ll show how to build an interactive tic-tac-toe game with React.

                    You can see what we’ll be building here: Final Result.

                    If the code doesn’t make sense to you, or if you are unfamiliar with the code’s syntax, don’t worry!

                    The goal of this tutorial is to help you understand React and its syntax.

                    We recommend that you check out the tic-tac-toe game before continuing with the tutorial.

                    One of the features that you’ll notice is that there is a numbered list to the right of the game’s board.

                    This list gives you a history of all of the moves that have occurred in the game, and it is updated as the game progresses.

                    You can close the tic-tac-toe game once you’re familiar with it. We’ll be starting from a simpler template in this tutorial.

                    Our next step is to set you up so that you can start building the game.

                    Prerequisites
                    We’ll assume that you have some familiarity with HTML and JavaScript,
                    but you should be able to follow along even if you’re coming from a different programming language.

                    We’ll also assume that you’re familiar with programming concepts like functions, objects, arrays, and to a lesser extent, classes.

                    If you need to review JavaScript, we recommend reading this guide.

                    Note that we’re also using some features from ES6 — a recent version of JavaScript. In this tutorial, we’re using arrow functions, classes, let, and const statements.

                    You can use the Babel REPL to check what ES6 code compiles to.

                    Setup for the Tutorial
                    There are two ways to complete this tutorial:
                    you can either write the code in your browser, or you can set up a local development environment on your computer.

                    Setup Option 1: Write Code in the Browser
                    This is the quickest way to get started!

                    First, open this Starter Code in a new tab.

                    The new tab should display an empty tic-tac-toe game board and React code. We will be editing the React code in this tutorial.

                    You can now skip the second setup option, and go to the Overview section to get an overview of React.

                    Setup Option 2: Local Development Environment
                    This is completely optional and not required for this tutorial!


                    Optional: Instructions for following along locally using your preferred text editor
                    Help, I’m Stuck!
                    If you get stuck, check out the community support resources.

                    In particular, Reactiflux Chat is a great way to get help quickly.

                    If you don’t receive an answer, or if you remain stuck,
                    please file an issue, and we’ll help you out.

                    Overview
                    Now that you’re set up, let’s get an overview of React!

                    What Is React?
                    React is a declarative, efficient, and flexible JavaScript library for building user interfaces.

                    It lets you compose complex UIs from small and isolated pieces of code called “components”.

                    React has a few different kinds of components, but we’ll start with React.Component subclasses:

                    We’ll get to the funny XML-like tags soon. We use components to tell React what we want to see on the screen.

                    When our data changes, React will efficiently update and re-render our components.

                    Here, ShoppingList is a React component class, or React component type. A component takes in parameters,
                    called props (short for “properties”), and returns a hierarchy of views to display via the render method.

                    The render method returns a description of what you want to see on the screen.

                    React takes the description and displays the result.

                    In particular, render returns a React element, which is a lightweight description of what to render.

                    Most React developers use a special syntax called “JSX” which makes these structures easier to write.

                    The div syntax is transformed at build time to React.createElement('div').

                    The example above is equivalent to:

                    See full expanded version.

                    If you’re curious, createElement() is described in more detail in the API reference,
                    but we won’t be using it in this tutorial.

                    Instead, we will keep using JSX.

                    JSX comes with the full power of JavaScript. You can put any JavaScript expressions within braces inside JSX.

                    Each React element is a JavaScript object that you can store in a variable or pass around in your program.

                    The ShoppingList component above only renders built-in DOM components like and .

                    But you can compose and render custom React components too.

                    For example, we can now refer to the whole shopping list by writing ShoppingList.

                    Each React component is encapsulated and can operate independently;
                    this allows you to build complex UIs from simple components.

                    Inspecting the Starter Code

                    If you’re going to work on the tutorial in your browser, open this code in a new tab: Starter Code.

                    If you’re going to work on the tutorial locally, instead open src/index.js in your project folder (you have already touched this file during the setup).

                    This Starter Code is the base of what we’re building. We’ve provided the CSS styling so that you only need to focus on learning React and programming the tic-tac-toe game.

                    By inspecting the code, you’ll notice that we have three React components:

                    Square
                    Board
                    Game
                    The Square component renders a single and the Board renders 9 squares.

                    The Game component renders a board with placeholder values which we’ll modify later.

                    There are currently no interactive components.

                    Passing Data Through Props
                    To get our feet wet, let’s try passing some data from our Board component to our Square component.

                    We strongly recommend typing code by hand as you’re working through the tutorial and not using copy/paste.

                    This will help you develop muscle memory and a stronger understanding.

                    In Board’s renderSquare method, change the code to pass a prop called value to the Square:
                </p>

                <p>What Are We Building?
                    In this tutorial, we’ll show how to build an interactive tic-tac-toe game with React.

                    You can see what we’ll be building here: Final Result.

                    If the code doesn’t make sense to you, or if you are unfamiliar with the code’s syntax, don’t worry!

                    The goal of this tutorial is to help you understand React and its syntax.

                    We recommend that you check out the tic-tac-toe game before continuing with the tutorial.

                    One of the features that you’ll notice is that there is a numbered list to the right of the game’s board.

                    This list gives you a history of all of the moves that have occurred in the game, and it is updated as the game progresses.

                    You can close the tic-tac-toe game once you’re familiar with it. We’ll be starting from a simpler template in this tutorial.

                    Our next step is to set you up so that you can start building the game.

                    Prerequisites
                    We’ll assume that you have some familiarity with HTML and JavaScript,
                    but you should be able to follow along even if you’re coming from a different programming language.

                    We’ll also assume that you’re familiar with programming concepts like functions, objects, arrays, and to a lesser extent, classes.

                    If you need to review JavaScript, we recommend reading this guide.

                    Note that we’re also using some features from ES6 — a recent version of JavaScript. In this tutorial, we’re using arrow functions, classes, let, and const statements.

                    You can use the Babel REPL to check what ES6 code compiles to.

                    Setup for the Tutorial
                    There are two ways to complete this tutorial:
                    you can either write the code in your browser, or you can set up a local development environment on your computer.

                    Setup Option 1: Write Code in the Browser
                    This is the quickest way to get started!

                    First, open this Starter Code in a new tab.

                    The new tab should display an empty tic-tac-toe game board and React code. We will be editing the React code in this tutorial.

                    You can now skip the second setup option, and go to the Overview section to get an overview of React.

                    Setup Option 2: Local Development Environment
                    This is completely optional and not required for this tutorial!


                    Optional: Instructions for following along locally using your preferred text editor
                    Help, I’m Stuck!
                    If you get stuck, check out the community support resources.

                    In particular, Reactiflux Chat is a great way to get help quickly.

                    If you don’t receive an answer, or if you remain stuck,
                    please file an issue, and we’ll help you out.

                    Overview
                    Now that you’re set up, let’s get an overview of React!

                    What Is React?
                    React is a declarative, efficient, and flexible JavaScript library for building user interfaces.

                    It lets you compose complex UIs from small and isolated pieces of code called “components”.

                    React has a few different kinds of components, but we’ll start with React.Component subclasses:

                    We’ll get to the funny XML-like tags soon. We use components to tell React what we want to see on the screen.

                    When our data changes, React will efficiently update and re-render our components.

                    Here, ShoppingList is a React component class, or React component type. A component takes in parameters,
                    called props (short for “properties”), and returns a hierarchy of views to display via the render method.

                    The render method returns a description of what you want to see on the screen.

                    React takes the description and displays the result.

                    In particular, render returns a React element, which is a lightweight description of what to render.

                    Most React developers use a special syntax called “JSX” which makes these structures easier to write.

                    The div syntax is transformed at build time to React.createElement('div').

                    The example above is equivalent to:

                    See full expanded version.

                    If you’re curious, createElement() is described in more detail in the API reference,
                    but we won’t be using it in this tutorial.

                    Instead, we will keep using JSX.

                    JSX comes with the full power of JavaScript. You can put any JavaScript expressions within braces inside JSX.

                    Each React element is a JavaScript object that you can store in a variable or pass around in your program.

                    The ShoppingList component above only renders built-in DOM components like and .

                    But you can compose and render custom React components too.

                    For example, we can now refer to the whole shopping list by writing ShoppingList.

                    Each React component is encapsulated and can operate independently;
                    this allows you to build complex UIs from simple components.

                    Inspecting the Starter Code

                    If you’re going to work on the tutorial in your browser, open this code in a new tab: Starter Code.

                    If you’re going to work on the tutorial locally, instead open src/index.js in your project folder (you have already touched this file during the setup).

                    This Starter Code is the base of what we’re building. We’ve provided the CSS styling so that you only need to focus on learning React and programming the tic-tac-toe game.

                    By inspecting the code, you’ll notice that we have three React components:

                    Square
                    Board
                    Game
                    The Square component renders a single and the Board renders 9 squares.

                    The Game component renders a board with placeholder values which we’ll modify later.

                    There are currently no interactive components.

                    Passing Data Through Props
                    To get our feet wet, let’s try passing some data from our Board component to our Square component.

                    We strongly recommend typing code by hand as you’re working through the tutorial and not using copy/paste.

                    This will help you develop muscle memory and a stronger understanding.

                    In Board’s renderSquare method, change the code to pass a prop called value to the Square:
                </p>

                <p>What Are We Building?
                    In this tutorial, we’ll show how to build an interactive tic-tac-toe game with React.

                    You can see what we’ll be building here: Final Result.

                    If the code doesn’t make sense to you, or if you are unfamiliar with the code’s syntax, don’t worry!

                    The goal of this tutorial is to help you understand React and its syntax.

                    We recommend that you check out the tic-tac-toe game before continuing with the tutorial.

                    One of the features that you’ll notice is that there is a numbered list to the right of the game’s board.

                    This list gives you a history of all of the moves that have occurred in the game, and it is updated as the game progresses.

                    You can close the tic-tac-toe game once you’re familiar with it. We’ll be starting from a simpler template in this tutorial.

                    Our next step is to set you up so that you can start building the game.

                    Prerequisites
                    We’ll assume that you have some familiarity with HTML and JavaScript,
                    but you should be able to follow along even if you’re coming from a different programming language.

                    We’ll also assume that you’re familiar with programming concepts like functions, objects, arrays, and to a lesser extent, classes.

                    If you need to review JavaScript, we recommend reading this guide.

                    Note that we’re also using some features from ES6 — a recent version of JavaScript. In this tutorial, we’re using arrow functions, classes, let, and const statements.

                    You can use the Babel REPL to check what ES6 code compiles to.

                    Setup for the Tutorial
                    There are two ways to complete this tutorial:
                    you can either write the code in your browser, or you can set up a local development environment on your computer.

                    Setup Option 1: Write Code in the Browser
                    This is the quickest way to get started!

                    First, open this Starter Code in a new tab.

                    The new tab should display an empty tic-tac-toe game board and React code. We will be editing the React code in this tutorial.

                    You can now skip the second setup option, and go to the Overview section to get an overview of React.

                    Setup Option 2: Local Development Environment
                    This is completely optional and not required for this tutorial!


                    Optional: Instructions for following along locally using your preferred text editor
                    Help, I’m Stuck!
                    If you get stuck, check out the community support resources.

                    In particular, Reactiflux Chat is a great way to get help quickly.

                    If you don’t receive an answer, or if you remain stuck,
                    please file an issue, and we’ll help you out.

                    Overview
                    Now that you’re set up, let’s get an overview of React!

                    What Is React?
                    React is a declarative, efficient, and flexible JavaScript library for building user interfaces.

                    It lets you compose complex UIs from small and isolated pieces of code called “components”.

                    React has a few different kinds of components, but we’ll start with React.Component subclasses:

                    We’ll get to the funny XML-like tags soon. We use components to tell React what we want to see on the screen.

                    When our data changes, React will efficiently update and re-render our components.

                    Here, ShoppingList is a React component class, or React component type. A component takes in parameters,
                    called props (short for “properties”), and returns a hierarchy of views to display via the render method.

                    The render method returns a description of what you want to see on the screen.

                    React takes the description and displays the result.

                    In particular, render returns a React element, which is a lightweight description of what to render.

                    Most React developers use a special syntax called “JSX” which makes these structures easier to write.

                    The div syntax is transformed at build time to React.createElement('div').

                    The example above is equivalent to:

                    See full expanded version.

                    If you’re curious, createElement() is described in more detail in the API reference,
                    but we won’t be using it in this tutorial.

                    Instead, we will keep using JSX.

                    JSX comes with the full power of JavaScript. You can put any JavaScript expressions within braces inside JSX.

                    Each React element is a JavaScript object that you can store in a variable or pass around in your program.

                    The ShoppingList component above only renders built-in DOM components like and .

                    But you can compose and render custom React components too.

                    For example, we can now refer to the whole shopping list by writing ShoppingList.

                    Each React component is encapsulated and can operate independently;
                    this allows you to build complex UIs from simple components.

                    Inspecting the Starter Code

                    If you’re going to work on the tutorial in your browser, open this code in a new tab: Starter Code.

                    If you’re going to work on the tutorial locally, instead open src/index.js in your project folder (you have already touched this file during the setup).

                    This Starter Code is the base of what we’re building. We’ve provided the CSS styling so that you only need to focus on learning React and programming the tic-tac-toe game.

                    By inspecting the code, you’ll notice that we have three React components:

                    Square
                    Board
                    Game
                    The Square component renders a single and the Board renders 9 squares.

                    The Game component renders a board with placeholder values which we’ll modify later.

                    There are currently no interactive components.

                    Passing Data Through Props
                    To get our feet wet, let’s try passing some data from our Board component to our Square component.

                    We strongly recommend typing code by hand as you’re working through the tutorial and not using copy/paste.

                    This will help you develop muscle memory and a stronger understanding.

                    In Board’s renderSquare method, change the code to pass a prop called value to the Square:
                </p>

                <p>What Are We Building?
                    In this tutorial, we’ll show how to build an interactive tic-tac-toe game with React.

                    You can see what we’ll be building here: Final Result.

                    If the code doesn’t make sense to you, or if you are unfamiliar with the code’s syntax, don’t worry!

                    The goal of this tutorial is to help you understand React and its syntax.

                    We recommend that you check out the tic-tac-toe game before continuing with the tutorial.

                    One of the features that you’ll notice is that there is a numbered list to the right of the game’s board.

                    This list gives you a history of all of the moves that have occurred in the game, and it is updated as the game progresses.

                    You can close the tic-tac-toe game once you’re familiar with it. We’ll be starting from a simpler template in this tutorial.

                    Our next step is to set you up so that you can start building the game.

                    Prerequisites
                    We’ll assume that you have some familiarity with HTML and JavaScript,
                    but you should be able to follow along even if you’re coming from a different programming language.

                    We’ll also assume that you’re familiar with programming concepts like functions, objects, arrays, and to a lesser extent, classes.

                    If you need to review JavaScript, we recommend reading this guide.

                    Note that we’re also using some features from ES6 — a recent version of JavaScript. In this tutorial, we’re using arrow functions, classes, let, and const statements.

                    You can use the Babel REPL to check what ES6 code compiles to.

                    Setup for the Tutorial
                    There are two ways to complete this tutorial:
                    you can either write the code in your browser, or you can set up a local development environment on your computer.

                    Setup Option 1: Write Code in the Browser
                    This is the quickest way to get started!

                    First, open this Starter Code in a new tab.

                    The new tab should display an empty tic-tac-toe game board and React code. We will be editing the React code in this tutorial.

                    You can now skip the second setup option, and go to the Overview section to get an overview of React.

                    Setup Option 2: Local Development Environment
                    This is completely optional and not required for this tutorial!


                    Optional: Instructions for following along locally using your preferred text editor
                    Help, I’m Stuck!
                    If you get stuck, check out the community support resources.

                    In particular, Reactiflux Chat is a great way to get help quickly.

                    If you don’t receive an answer, or if you remain stuck,
                    please file an issue, and we’ll help you out.

                    Overview
                    Now that you’re set up, let’s get an overview of React!

                    What Is React?
                    React is a declarative, efficient, and flexible JavaScript library for building user interfaces.

                    It lets you compose complex UIs from small and isolated pieces of code called “components”.

                    React has a few different kinds of components, but we’ll start with React.Component subclasses:

                    We’ll get to the funny XML-like tags soon. We use components to tell React what we want to see on the screen.

                    When our data changes, React will efficiently update and re-render our components.

                    Here, ShoppingList is a React component class, or React component type. A component takes in parameters,
                    called props (short for “properties”), and returns a hierarchy of views to display via the render method.

                    The render method returns a description of what you want to see on the screen.

                    React takes the description and displays the result.

                    In particular, render returns a React element, which is a lightweight description of what to render.

                    Most React developers use a special syntax called “JSX” which makes these structures easier to write.

                    The div syntax is transformed at build time to React.createElement('div').

                    The example above is equivalent to:

                    See full expanded version.

                    If you’re curious, createElement() is described in more detail in the API reference,
                    but we won’t be using it in this tutorial.

                    Instead, we will keep using JSX.

                    JSX comes with the full power of JavaScript. You can put any JavaScript expressions within braces inside JSX.

                    Each React element is a JavaScript object that you can store in a variable or pass around in your program.

                    The ShoppingList component above only renders built-in DOM components like and .

                    But you can compose and render custom React components too.

                    For example, we can now refer to the whole shopping list by writing ShoppingList.

                    Each React component is encapsulated and can operate independently;
                    this allows you to build complex UIs from simple components.

                    Inspecting the Starter Code

                    If you’re going to work on the tutorial in your browser, open this code in a new tab: Starter Code.

                    If you’re going to work on the tutorial locally, instead open src/index.js in your project folder (you have already touched this file during the setup).

                    This Starter Code is the base of what we’re building. We’ve provided the CSS styling so that you only need to focus on learning React and programming the tic-tac-toe game.

                    By inspecting the code, you’ll notice that we have three React components:

                    Square
                    Board
                    Game
                    The Square component renders a single and the Board renders 9 squares.

                    The Game component renders a board with placeholder values which we’ll modify later.

                    There are currently no interactive components.

                    Passing Data Through Props
                    To get our feet wet, let’s try passing some data from our Board component to our Square component.

                    We strongly recommend typing code by hand as you’re working through the tutorial and not using copy/paste.

                    This will help you develop muscle memory and a stronger understanding.

                    In Board’s renderSquare method, change the code to pass a prop called value to the Square:
                </p>

                <p>What Are We Building?
                    In this tutorial, we’ll show how to build an interactive tic-tac-toe game with React.

                    You can see what we’ll be building here: Final Result.

                    If the code doesn’t make sense to you, or if you are unfamiliar with the code’s syntax, don’t worry!

                    The goal of this tutorial is to help you understand React and its syntax.

                    We recommend that you check out the tic-tac-toe game before continuing with the tutorial.

                    One of the features that you’ll notice is that there is a numbered list to the right of the game’s board.

                    This list gives you a history of all of the moves that have occurred in the game, and it is updated as the game progresses.

                    You can close the tic-tac-toe game once you’re familiar with it. We’ll be starting from a simpler template in this tutorial.

                    Our next step is to set you up so that you can start building the game.

                    Prerequisites
                    We’ll assume that you have some familiarity with HTML and JavaScript,
                    but you should be able to follow along even if you’re coming from a different programming language.

                    We’ll also assume that you’re familiar with programming concepts like functions, objects, arrays, and to a lesser extent, classes.

                    If you need to review JavaScript, we recommend reading this guide.

                    Note that we’re also using some features from ES6 — a recent version of JavaScript. In this tutorial, we’re using arrow functions, classes, let, and const statements.

                    You can use the Babel REPL to check what ES6 code compiles to.

                    Setup for the Tutorial
                    There are two ways to complete this tutorial:
                    you can either write the code in your browser, or you can set up a local development environment on your computer.

                    Setup Option 1: Write Code in the Browser
                    This is the quickest way to get started!

                    First, open this Starter Code in a new tab.

                    The new tab should display an empty tic-tac-toe game board and React code. We will be editing the React code in this tutorial.

                    You can now skip the second setup option, and go to the Overview section to get an overview of React.

                    Setup Option 2: Local Development Environment
                    This is completely optional and not required for this tutorial!


                    Optional: Instructions for following along locally using your preferred text editor
                    Help, I’m Stuck!
                    If you get stuck, check out the community support resources.

                    In particular, Reactiflux Chat is a great way to get help quickly.

                    If you don’t receive an answer, or if you remain stuck,
                    please file an issue, and we’ll help you out.

                    Overview
                    Now that you’re set up, let’s get an overview of React!

                    What Is React?
                    React is a declarative, efficient, and flexible JavaScript library for building user interfaces.

                    It lets you compose complex UIs from small and isolated pieces of code called “components”.

                    React has a few different kinds of components, but we’ll start with React.Component subclasses:

                    We’ll get to the funny XML-like tags soon. We use components to tell React what we want to see on the screen.

                    When our data changes, React will efficiently update and re-render our components.

                    Here, ShoppingList is a React component class, or React component type. A component takes in parameters,
                    called props (short for “properties”), and returns a hierarchy of views to display via the render method.

                    The render method returns a description of what you want to see on the screen.

                    React takes the description and displays the result.

                    In particular, render returns a React element, which is a lightweight description of what to render.

                    Most React developers use a special syntax called “JSX” which makes these structures easier to write.

                    The div syntax is transformed at build time to React.createElement('div').

                    The example above is equivalent to:

                    See full expanded version.

                    If you’re curious, createElement() is described in more detail in the API reference,
                    but we won’t be using it in this tutorial.

                    Instead, we will keep using JSX.

                    JSX comes with the full power of JavaScript. You can put any JavaScript expressions within braces inside JSX.

                    Each React element is a JavaScript object that you can store in a variable or pass around in your program.

                    The ShoppingList component above only renders built-in DOM components like and .

                    But you can compose and render custom React components too.

                    For example, we can now refer to the whole shopping list by writing ShoppingList.

                    Each React component is encapsulated and can operate independently;
                    this allows you to build complex UIs from simple components.

                    Inspecting the Starter Code

                    If you’re going to work on the tutorial in your browser, open this code in a new tab: Starter Code.

                    If you’re going to work on the tutorial locally, instead open src/index.js in your project folder (you have already touched this file during the setup).

                    This Starter Code is the base of what we’re building. We’ve provided the CSS styling so that you only need to focus on learning React and programming the tic-tac-toe game.

                    By inspecting the code, you’ll notice that we have three React components:

                    Square
                    Board
                    Game
                    The Square component renders a single and the Board renders 9 squares.

                    The Game component renders a board with placeholder values which we’ll modify later.

                    There are currently no interactive components.

                    Passing Data Through Props
                    To get our feet wet, let’s try passing some data from our Board component to our Square component.

                    We strongly recommend typing code by hand as you’re working through the tutorial and not using copy/paste.

                    This will help you develop muscle memory and a stronger understanding.

                    In Board’s renderSquare method, change the code to pass a prop called value to the Square:
                </p>

                <p>What Are We Building?
                    In this tutorial, we’ll show how to build an interactive tic-tac-toe game with React.

                    You can see what we’ll be building here: Final Result.

                    If the code doesn’t make sense to you, or if you are unfamiliar with the code’s syntax, don’t worry!

                    The goal of this tutorial is to help you understand React and its syntax.

                    We recommend that you check out the tic-tac-toe game before continuing with the tutorial.

                    One of the features that you’ll notice is that there is a numbered list to the right of the game’s board.

                    This list gives you a history of all of the moves that have occurred in the game, and it is updated as the game progresses.

                    You can close the tic-tac-toe game once you’re familiar with it. We’ll be starting from a simpler template in this tutorial.

                    Our next step is to set you up so that you can start building the game.

                    Prerequisites
                    We’ll assume that you have some familiarity with HTML and JavaScript,
                    but you should be able to follow along even if you’re coming from a different programming language.

                    We’ll also assume that you’re familiar with programming concepts like functions, objects, arrays, and to a lesser extent, classes.

                    If you need to review JavaScript, we recommend reading this guide.

                    Note that we’re also using some features from ES6 — a recent version of JavaScript. In this tutorial, we’re using arrow functions, classes, let, and const statements.

                    You can use the Babel REPL to check what ES6 code compiles to.

                    Setup for the Tutorial
                    There are two ways to complete this tutorial:
                    you can either write the code in your browser, or you can set up a local development environment on your computer.

                    Setup Option 1: Write Code in the Browser
                    This is the quickest way to get started!

                    First, open this Starter Code in a new tab.

                    The new tab should display an empty tic-tac-toe game board and React code. We will be editing the React code in this tutorial.

                    You can now skip the second setup option, and go to the Overview section to get an overview of React.

                    Setup Option 2: Local Development Environment
                    This is completely optional and not required for this tutorial!


                    Optional: Instructions for following along locally using your preferred text editor
                    Help, I’m Stuck!
                    If you get stuck, check out the community support resources.

                    In particular, Reactiflux Chat is a great way to get help quickly.

                    If you don’t receive an answer, or if you remain stuck,
                    please file an issue, and we’ll help you out.

                    Overview
                    Now that you’re set up, let’s get an overview of React!

                    What Is React?
                    React is a declarative, efficient, and flexible JavaScript library for building user interfaces.

                    It lets you compose complex UIs from small and isolated pieces of code called “components”.

                    React has a few different kinds of components, but we’ll start with React.Component subclasses:

                    We’ll get to the funny XML-like tags soon. We use components to tell React what we want to see on the screen.

                    When our data changes, React will efficiently update and re-render our components.

                    Here, ShoppingList is a React component class, or React component type. A component takes in parameters,
                    called props (short for “properties”), and returns a hierarchy of views to display via the render method.

                    The render method returns a description of what you want to see on the screen.

                    React takes the description and displays the result.

                    In particular, render returns a React element, which is a lightweight description of what to render.

                    Most React developers use a special syntax called “JSX” which makes these structures easier to write.

                    The div syntax is transformed at build time to React.createElement('div').

                    The example above is equivalent to:

                    See full expanded version.

                    If you’re curious, createElement() is described in more detail in the API reference,
                    but we won’t be using it in this tutorial.

                    Instead, we will keep using JSX.

                    JSX comes with the full power of JavaScript. You can put any JavaScript expressions within braces inside JSX.

                    Each React element is a JavaScript object that you can store in a variable or pass around in your program.

                    The ShoppingList component above only renders built-in DOM components like and .

                    But you can compose and render custom React components too.

                    For example, we can now refer to the whole shopping list by writing ShoppingList.

                    Each React component is encapsulated and can operate independently;
                    this allows you to build complex UIs from simple components.

                    Inspecting the Starter Code

                    If you’re going to work on the tutorial in your browser, open this code in a new tab: Starter Code.

                    If you’re going to work on the tutorial locally, instead open src/index.js in your project folder (you have already touched this file during the setup).

                    This Starter Code is the base of what we’re building. We’ve provided the CSS styling so that you only need to focus on learning React and programming the tic-tac-toe game.

                    By inspecting the code, you’ll notice that we have three React components:

                    Square
                    Board
                    Game
                    The Square component renders a single and the Board renders 9 squares.

                    The Game component renders a board with placeholder values which we’ll modify later.

                    There are currently no interactive components.

                    Passing Data Through Props
                    To get our feet wet, let’s try passing some data from our Board component to our Square component.

                    We strongly recommend typing code by hand as you’re working through the tutorial and not using copy/paste.

                    This will help you develop muscle memory and a stronger understanding.

                    In Board’s renderSquare method, change the code to pass a prop called value to the Square:
                </p>

                <p>What Are We Building?
                    In this tutorial, we’ll show how to build an interactive tic-tac-toe game with React.

                    You can see what we’ll be building here: Final Result.

                    If the code doesn’t make sense to you, or if you are unfamiliar with the code’s syntax, don’t worry!

                    The goal of this tutorial is to help you understand React and its syntax.

                    We recommend that you check out the tic-tac-toe game before continuing with the tutorial.

                    One of the features that you’ll notice is that there is a numbered list to the right of the game’s board.

                    This list gives you a history of all of the moves that have occurred in the game, and it is updated as the game progresses.

                    You can close the tic-tac-toe game once you’re familiar with it. We’ll be starting from a simpler template in this tutorial.

                    Our next step is to set you up so that you can start building the game.

                    Prerequisites
                    We’ll assume that you have some familiarity with HTML and JavaScript,
                    but you should be able to follow along even if you’re coming from a different programming language.

                    We’ll also assume that you’re familiar with programming concepts like functions, objects, arrays, and to a lesser extent, classes.

                    If you need to review JavaScript, we recommend reading this guide.

                    Note that we’re also using some features from ES6 — a recent version of JavaScript. In this tutorial, we’re using arrow functions, classes, let, and const statements.

                    You can use the Babel REPL to check what ES6 code compiles to.

                    Setup for the Tutorial
                    There are two ways to complete this tutorial:
                    you can either write the code in your browser, or you can set up a local development environment on your computer.

                    Setup Option 1: Write Code in the Browser
                    This is the quickest way to get started!

                    First, open this Starter Code in a new tab.

                    The new tab should display an empty tic-tac-toe game board and React code. We will be editing the React code in this tutorial.

                    You can now skip the second setup option, and go to the Overview section to get an overview of React.

                    Setup Option 2: Local Development Environment
                    This is completely optional and not required for this tutorial!


                    Optional: Instructions for following along locally using your preferred text editor
                    Help, I’m Stuck!
                    If you get stuck, check out the community support resources.

                    In particular, Reactiflux Chat is a great way to get help quickly.

                    If you don’t receive an answer, or if you remain stuck,
                    please file an issue, and we’ll help you out.

                    Overview
                    Now that you’re set up, let’s get an overview of React!

                    What Is React?
                    React is a declarative, efficient, and flexible JavaScript library for building user interfaces.

                    It lets you compose complex UIs from small and isolated pieces of code called “components”.

                    React has a few different kinds of components, but we’ll start with React.Component subclasses:

                    We’ll get to the funny XML-like tags soon. We use components to tell React what we want to see on the screen.

                    When our data changes, React will efficiently update and re-render our components.

                    Here, ShoppingList is a React component class, or React component type. A component takes in parameters,
                    called props (short for “properties”), and returns a hierarchy of views to display via the render method.

                    The render method returns a description of what you want to see on the screen.

                    React takes the description and displays the result.

                    In particular, render returns a React element, which is a lightweight description of what to render.

                    Most React developers use a special syntax called “JSX” which makes these structures easier to write.

                    The div syntax is transformed at build time to React.createElement('div').

                    The example above is equivalent to:

                    See full expanded version.

                    If you’re curious, createElement() is described in more detail in the API reference,
                    but we won’t be using it in this tutorial.

                    Instead, we will keep using JSX.

                    JSX comes with the full power of JavaScript. You can put any JavaScript expressions within braces inside JSX.

                    Each React element is a JavaScript object that you can store in a variable or pass around in your program.

                    The ShoppingList component above only renders built-in DOM components like and .

                    But you can compose and render custom React components too.

                    For example, we can now refer to the whole shopping list by writing ShoppingList.

                    Each React component is encapsulated and can operate independently;
                    this allows you to build complex UIs from simple components.

                    Inspecting the Starter Code

                    If you’re going to work on the tutorial in your browser, open this code in a new tab: Starter Code.

                    If you’re going to work on the tutorial locally, instead open src/index.js in your project folder (you have already touched this file during the setup).

                    This Starter Code is the base of what we’re building. We’ve provided the CSS styling so that you only need to focus on learning React and programming the tic-tac-toe game.

                    By inspecting the code, you’ll notice that we have three React components:

                    Square
                    Board
                    Game
                    The Square component renders a single and the Board renders 9 squares.

                    The Game component renders a board with placeholder values which we’ll modify later.

                    There are currently no interactive components.

                    Passing Data Through Props
                    To get our feet wet, let’s try passing some data from our Board component to our Square component.

                    We strongly recommend typing code by hand as you’re working through the tutorial and not using copy/paste.

                    This will help you develop muscle memory and a stronger understanding.

                    In Board’s renderSquare method, change the code to pass a prop called value to the Square:
                </p>

                <p>What Are We Building?
                    In this tutorial, we’ll show how to build an interactive tic-tac-toe game with React.

                    You can see what we’ll be building here: Final Result.

                    If the code doesn’t make sense to you, or if you are unfamiliar with the code’s syntax, don’t worry!

                    The goal of this tutorial is to help you understand React and its syntax.

                    We recommend that you check out the tic-tac-toe game before continuing with the tutorial.

                    One of the features that you’ll notice is that there is a numbered list to the right of the game’s board.

                    This list gives you a history of all of the moves that have occurred in the game, and it is updated as the game progresses.

                    You can close the tic-tac-toe game once you’re familiar with it. We’ll be starting from a simpler template in this tutorial.

                    Our next step is to set you up so that you can start building the game.

                    Prerequisites
                    We’ll assume that you have some familiarity with HTML and JavaScript,
                    but you should be able to follow along even if you’re coming from a different programming language.

                    We’ll also assume that you’re familiar with programming concepts like functions, objects, arrays, and to a lesser extent, classes.

                    If you need to review JavaScript, we recommend reading this guide.

                    Note that we’re also using some features from ES6 — a recent version of JavaScript. In this tutorial, we’re using arrow functions, classes, let, and const statements.

                    You can use the Babel REPL to check what ES6 code compiles to.

                    Setup for the Tutorial
                    There are two ways to complete this tutorial:
                    you can either write the code in your browser, or you can set up a local development environment on your computer.

                    Setup Option 1: Write Code in the Browser
                    This is the quickest way to get started!

                    First, open this Starter Code in a new tab.

                    The new tab should display an empty tic-tac-toe game board and React code. We will be editing the React code in this tutorial.

                    You can now skip the second setup option, and go to the Overview section to get an overview of React.

                    Setup Option 2: Local Development Environment
                    This is completely optional and not required for this tutorial!


                    Optional: Instructions for following along locally using your preferred text editor
                    Help, I’m Stuck!
                    If you get stuck, check out the community support resources.

                    In particular, Reactiflux Chat is a great way to get help quickly.

                    If you don’t receive an answer, or if you remain stuck,
                    please file an issue, and we’ll help you out.

                    Overview
                    Now that you’re set up, let’s get an overview of React!

                    What Is React?
                    React is a declarative, efficient, and flexible JavaScript library for building user interfaces.

                    It lets you compose complex UIs from small and isolated pieces of code called “components”.

                    React has a few different kinds of components, but we’ll start with React.Component subclasses:

                    We’ll get to the funny XML-like tags soon. We use components to tell React what we want to see on the screen.

                    When our data changes, React will efficiently update and re-render our components.

                    Here, ShoppingList is a React component class, or React component type. A component takes in parameters,
                    called props (short for “properties”), and returns a hierarchy of views to display via the render method.

                    The render method returns a description of what you want to see on the screen.

                    React takes the description and displays the result.

                    In particular, render returns a React element, which is a lightweight description of what to render.

                    Most React developers use a special syntax called “JSX” which makes these structures easier to write.

                    The div syntax is transformed at build time to React.createElement('div').

                    The example above is equivalent to:

                    See full expanded version.

                    If you’re curious, createElement() is described in more detail in the API reference,
                    but we won’t be using it in this tutorial.

                    Instead, we will keep using JSX.

                    JSX comes with the full power of JavaScript. You can put any JavaScript expressions within braces inside JSX.

                    Each React element is a JavaScript object that you can store in a variable or pass around in your program.

                    The ShoppingList component above only renders built-in DOM components like and .

                    But you can compose and render custom React components too.

                    For example, we can now refer to the whole shopping list by writing ShoppingList.

                    Each React component is encapsulated and can operate independently;
                    this allows you to build complex UIs from simple components.

                    Inspecting the Starter Code

                    If you’re going to work on the tutorial in your browser, open this code in a new tab: Starter Code.

                    If you’re going to work on the tutorial locally, instead open src/index.js in your project folder (you have already touched this file during the setup).

                    This Starter Code is the base of what we’re building. We’ve provided the CSS styling so that you only need to focus on learning React and programming the tic-tac-toe game.

                    By inspecting the code, you’ll notice that we have three React components:

                    Square
                    Board
                    Game
                    The Square component renders a single and the Board renders 9 squares.

                    The Game component renders a board with placeholder values which we’ll modify later.

                    There are currently no interactive components.

                    Passing Data Through Props
                    To get our feet wet, let’s try passing some data from our Board component to our Square component.

                    We strongly recommend typing code by hand as you’re working through the tutorial and not using copy/paste.

                    This will help you develop muscle memory and a stronger understanding.

                    In Board’s renderSquare method, change the code to pass a prop called value to the Square:
                </p>

                <p>What Are We Building?
                    In this tutorial, we’ll show how to build an interactive tic-tac-toe game with React.

                    You can see what we’ll be building here: Final Result.

                    If the code doesn’t make sense to you, or if you are unfamiliar with the code’s syntax, don’t worry!

                    The goal of this tutorial is to help you understand React and its syntax.

                    We recommend that you check out the tic-tac-toe game before continuing with the tutorial.

                    One of the features that you’ll notice is that there is a numbered list to the right of the game’s board.

                    This list gives you a history of all of the moves that have occurred in the game, and it is updated as the game progresses.

                    You can close the tic-tac-toe game once you’re familiar with it. We’ll be starting from a simpler template in this tutorial.

                    Our next step is to set you up so that you can start building the game.

                    Prerequisites
                    We’ll assume that you have some familiarity with HTML and JavaScript,
                    but you should be able to follow along even if you’re coming from a different programming language.

                    We’ll also assume that you’re familiar with programming concepts like functions, objects, arrays, and to a lesser extent, classes.

                    If you need to review JavaScript, we recommend reading this guide.

                    Note that we’re also using some features from ES6 — a recent version of JavaScript. In this tutorial, we’re using arrow functions, classes, let, and const statements.

                    You can use the Babel REPL to check what ES6 code compiles to.

                    Setup for the Tutorial
                    There are two ways to complete this tutorial:
                    you can either write the code in your browser, or you can set up a local development environment on your computer.

                    Setup Option 1: Write Code in the Browser
                    This is the quickest way to get started!

                    First, open this Starter Code in a new tab.

                    The new tab should display an empty tic-tac-toe game board and React code. We will be editing the React code in this tutorial.

                    You can now skip the second setup option, and go to the Overview section to get an overview of React.

                    Setup Option 2: Local Development Environment
                    This is completely optional and not required for this tutorial!


                    Optional: Instructions for following along locally using your preferred text editor
                    Help, I’m Stuck!
                    If you get stuck, check out the community support resources.

                    In particular, Reactiflux Chat is a great way to get help quickly.

                    If you don’t receive an answer, or if you remain stuck,
                    please file an issue, and we’ll help you out.

                    Overview
                    Now that you’re set up, let’s get an overview of React!

                    What Is React?
                    React is a declarative, efficient, and flexible JavaScript library for building user interfaces.

                    It lets you compose complex UIs from small and isolated pieces of code called “components”.

                    React has a few different kinds of components, but we’ll start with React.Component subclasses:

                    We’ll get to the funny XML-like tags soon. We use components to tell React what we want to see on the screen.

                    When our data changes, React will efficiently update and re-render our components.

                    Here, ShoppingList is a React component class, or React component type. A component takes in parameters,
                    called props (short for “properties”), and returns a hierarchy of views to display via the render method.

                    The render method returns a description of what you want to see on the screen.

                    React takes the description and displays the result.

                    In particular, render returns a React element, which is a lightweight description of what to render.

                    Most React developers use a special syntax called “JSX” which makes these structures easier to write.

                    The div syntax is transformed at build time to React.createElement('div').

                    The example above is equivalent to:

                    See full expanded version.

                    If you’re curious, createElement() is described in more detail in the API reference,
                    but we won’t be using it in this tutorial.

                    Instead, we will keep using JSX.

                    JSX comes with the full power of JavaScript. You can put any JavaScript expressions within braces inside JSX.

                    Each React element is a JavaScript object that you can store in a variable or pass around in your program.

                    The ShoppingList component above only renders built-in DOM components like and .

                    But you can compose and render custom React components too.

                    For example, we can now refer to the whole shopping list by writing ShoppingList.

                    Each React component is encapsulated and can operate independently;
                    this allows you to build complex UIs from simple components.

                    Inspecting the Starter Code

                    If you’re going to work on the tutorial in your browser, open this code in a new tab: Starter Code.

                    If you’re going to work on the tutorial locally, instead open src/index.js in your project folder (you have already touched this file during the setup).

                    This Starter Code is the base of what we’re building. We’ve provided the CSS styling so that you only need to focus on learning React and programming the tic-tac-toe game.

                    By inspecting the code, you’ll notice that we have three React components:

                    Square
                    Board
                    Game
                    The Square component renders a single and the Board renders 9 squares.

                    The Game component renders a board with placeholder values which we’ll modify later.

                    There are currently no interactive components.

                    Passing Data Through Props
                    To get our feet wet, let’s try passing some data from our Board component to our Square component.

                    We strongly recommend typing code by hand as you’re working through the tutorial and not using copy/paste.

                    This will help you develop muscle memory and a stronger understanding.

                    In Board’s renderSquare method, change the code to pass a prop called value to the Square:
                </p>

                <p>What Are We Building?
                    In this tutorial, we’ll show how to build an interactive tic-tac-toe game with React.

                    You can see what we’ll be building here: Final Result.

                    If the code doesn’t make sense to you, or if you are unfamiliar with the code’s syntax, don’t worry!

                    The goal of this tutorial is to help you understand React and its syntax.

                    We recommend that you check out the tic-tac-toe game before continuing with the tutorial.

                    One of the features that you’ll notice is that there is a numbered list to the right of the game’s board.

                    This list gives you a history of all of the moves that have occurred in the game, and it is updated as the game progresses.

                    You can close the tic-tac-toe game once you’re familiar with it. We’ll be starting from a simpler template in this tutorial.

                    Our next step is to set you up so that you can start building the game.

                    Prerequisites
                    We’ll assume that you have some familiarity with HTML and JavaScript,
                    but you should be able to follow along even if you’re coming from a different programming language.

                    We’ll also assume that you’re familiar with programming concepts like functions, objects, arrays, and to a lesser extent, classes.

                    If you need to review JavaScript, we recommend reading this guide.

                    Note that we’re also using some features from ES6 — a recent version of JavaScript. In this tutorial, we’re using arrow functions, classes, let, and const statements.

                    You can use the Babel REPL to check what ES6 code compiles to.

                    Setup for the Tutorial
                    There are two ways to complete this tutorial:
                    you can either write the code in your browser, or you can set up a local development environment on your computer.

                    Setup Option 1: Write Code in the Browser
                    This is the quickest way to get started!

                    First, open this Starter Code in a new tab.

                    The new tab should display an empty tic-tac-toe game board and React code. We will be editing the React code in this tutorial.

                    You can now skip the second setup option, and go to the Overview section to get an overview of React.

                    Setup Option 2: Local Development Environment
                    This is completely optional and not required for this tutorial!


                    Optional: Instructions for following along locally using your preferred text editor
                    Help, I’m Stuck!
                    If you get stuck, check out the community support resources.

                    In particular, Reactiflux Chat is a great way to get help quickly.

                    If you don’t receive an answer, or if you remain stuck,
                    please file an issue, and we’ll help you out.

                    Overview
                    Now that you’re set up, let’s get an overview of React!

                    What Is React?
                    React is a declarative, efficient, and flexible JavaScript library for building user interfaces.

                    It lets you compose complex UIs from small and isolated pieces of code called “components”.

                    React has a few different kinds of components, but we’ll start with React.Component subclasses:

                    We’ll get to the funny XML-like tags soon. We use components to tell React what we want to see on the screen.

                    When our data changes, React will efficiently update and re-render our components.

                    Here, ShoppingList is a React component class, or React component type. A component takes in parameters,
                    called props (short for “properties”), and returns a hierarchy of views to display via the render method.

                    The render method returns a description of what you want to see on the screen.

                    React takes the description and displays the result.

                    In particular, render returns a React element, which is a lightweight description of what to render.

                    Most React developers use a special syntax called “JSX” which makes these structures easier to write.

                    The div syntax is transformed at build time to React.createElement('div').

                    The example above is equivalent to:

                    See full expanded version.

                    If you’re curious, createElement() is described in more detail in the API reference,
                    but we won’t be using it in this tutorial.

                    Instead, we will keep using JSX.

                    JSX comes with the full power of JavaScript. You can put any JavaScript expressions within braces inside JSX.

                    Each React element is a JavaScript object that you can store in a variable or pass around in your program.

                    The ShoppingList component above only renders built-in DOM components like and .

                    But you can compose and render custom React components too.

                    For example, we can now refer to the whole shopping list by writing ShoppingList.

                    Each React component is encapsulated and can operate independently;
                    this allows you to build complex UIs from simple components.

                    Inspecting the Starter Code

                    If you’re going to work on the tutorial in your browser, open this code in a new tab: Starter Code.

                    If you’re going to work on the tutorial locally, instead open src/index.js in your project folder (you have already touched this file during the setup).

                    This Starter Code is the base of what we’re building. We’ve provided the CSS styling so that you only need to focus on learning React and programming the tic-tac-toe game.

                    By inspecting the code, you’ll notice that we have three React components:

                    Square
                    Board
                    Game
                    The Square component renders a single and the Board renders 9 squares.

                    The Game component renders a board with placeholder values which we’ll modify later.

                    There are currently no interactive components.

                    Passing Data Through Props
                    To get our feet wet, let’s try passing some data from our Board component to our Square component.

                    We strongly recommend typing code by hand as you’re working through the tutorial and not using copy/paste.

                    This will help you develop muscle memory and a stronger understanding.

                    In Board’s renderSquare method, change the code to pass a prop called value to the Square:
                </p>

                <p>What Are We Building?
                    In this tutorial, we’ll show how to build an interactive tic-tac-toe game with React.

                    You can see what we’ll be building here: Final Result.

                    If the code doesn’t make sense to you, or if you are unfamiliar with the code’s syntax, don’t worry!

                    The goal of this tutorial is to help you understand React and its syntax.

                    We recommend that you check out the tic-tac-toe game before continuing with the tutorial.

                    One of the features that you’ll notice is that there is a numbered list to the right of the game’s board.

                    This list gives you a history of all of the moves that have occurred in the game, and it is updated as the game progresses.

                    You can close the tic-tac-toe game once you’re familiar with it. We’ll be starting from a simpler template in this tutorial.

                    Our next step is to set you up so that you can start building the game.

                    Prerequisites
                    We’ll assume that you have some familiarity with HTML and JavaScript,
                    but you should be able to follow along even if you’re coming from a different programming language.

                    We’ll also assume that you’re familiar with programming concepts like functions, objects, arrays, and to a lesser extent, classes.

                    If you need to review JavaScript, we recommend reading this guide.

                    Note that we’re also using some features from ES6 — a recent version of JavaScript. In this tutorial, we’re using arrow functions, classes, let, and const statements.

                    You can use the Babel REPL to check what ES6 code compiles to.

                    Setup for the Tutorial
                    There are two ways to complete this tutorial:
                    you can either write the code in your browser, or you can set up a local development environment on your computer.

                    Setup Option 1: Write Code in the Browser
                    This is the quickest way to get started!

                    First, open this Starter Code in a new tab.

                    The new tab should display an empty tic-tac-toe game board and React code. We will be editing the React code in this tutorial.

                    You can now skip the second setup option, and go to the Overview section to get an overview of React.

                    Setup Option 2: Local Development Environment
                    This is completely optional and not required for this tutorial!


                    Optional: Instructions for following along locally using your preferred text editor
                    Help, I’m Stuck!
                    If you get stuck, check out the community support resources.

                    In particular, Reactiflux Chat is a great way to get help quickly.

                    If you don’t receive an answer, or if you remain stuck,
                    please file an issue, and we’ll help you out.

                    Overview
                    Now that you’re set up, let’s get an overview of React!

                    What Is React?
                    React is a declarative, efficient, and flexible JavaScript library for building user interfaces.

                    It lets you compose complex UIs from small and isolated pieces of code called “components”.

                    React has a few different kinds of components, but we’ll start with React.Component subclasses:

                    We’ll get to the funny XML-like tags soon. We use components to tell React what we want to see on the screen.

                    When our data changes, React will efficiently update and re-render our components.

                    Here, ShoppingList is a React component class, or React component type. A component takes in parameters,
                    called props (short for “properties”), and returns a hierarchy of views to display via the render method.

                    The render method returns a description of what you want to see on the screen.

                    React takes the description and displays the result.

                    In particular, render returns a React element, which is a lightweight description of what to render.

                    Most React developers use a special syntax called “JSX” which makes these structures easier to write.

                    The div syntax is transformed at build time to React.createElement('div').

                    The example above is equivalent to:

                    See full expanded version.

                    If you’re curious, createElement() is described in more detail in the API reference,
                    but we won’t be using it in this tutorial.

                    Instead, we will keep using JSX.

                    JSX comes with the full power of JavaScript. You can put any JavaScript expressions within braces inside JSX.

                    Each React element is a JavaScript object that you can store in a variable or pass around in your program.

                    The ShoppingList component above only renders built-in DOM components like and .

                    But you can compose and render custom React components too.

                    For example, we can now refer to the whole shopping list by writing ShoppingList.

                    Each React component is encapsulated and can operate independently;
                    this allows you to build complex UIs from simple components.

                    Inspecting the Starter Code

                    If you’re going to work on the tutorial in your browser, open this code in a new tab: Starter Code.

                    If you’re going to work on the tutorial locally, instead open src/index.js in your project folder (you have already touched this file during the setup).

                    This Starter Code is the base of what we’re building. We’ve provided the CSS styling so that you only need to focus on learning React and programming the tic-tac-toe game.

                    By inspecting the code, you’ll notice that we have three React components:

                    Square
                    Board
                    Game
                    The Square component renders a single and the Board renders 9 squares.

                    The Game component renders a board with placeholder values which we’ll modify later.

                    There are currently no interactive components.

                    Passing Data Through Props
                    To get our feet wet, let’s try passing some data from our Board component to our Square component.

                    We strongly recommend typing code by hand as you’re working through the tutorial and not using copy/paste.

                    This will help you develop muscle memory and a stronger understanding.

                    In Board’s renderSquare method, change the code to pass a prop called value to the Square:
                </p>

                <p>What Are We Building?
                    In this tutorial, we’ll show how to build an interactive tic-tac-toe game with React.

                    You can see what we’ll be building here: Final Result.

                    If the code doesn’t make sense to you, or if you are unfamiliar with the code’s syntax, don’t worry!

                    The goal of this tutorial is to help you understand React and its syntax.

                    We recommend that you check out the tic-tac-toe game before continuing with the tutorial.

                    One of the features that you’ll notice is that there is a numbered list to the right of the game’s board.

                    This list gives you a history of all of the moves that have occurred in the game, and it is updated as the game progresses.

                    You can close the tic-tac-toe game once you’re familiar with it. We’ll be starting from a simpler template in this tutorial.

                    Our next step is to set you up so that you can start building the game.

                    Prerequisites
                    We’ll assume that you have some familiarity with HTML and JavaScript,
                    but you should be able to follow along even if you’re coming from a different programming language.

                    We’ll also assume that you’re familiar with programming concepts like functions, objects, arrays, and to a lesser extent, classes.

                    If you need to review JavaScript, we recommend reading this guide.

                    Note that we’re also using some features from ES6 — a recent version of JavaScript. In this tutorial, we’re using arrow functions, classes, let, and const statements.

                    You can use the Babel REPL to check what ES6 code compiles to.

                    Setup for the Tutorial
                    There are two ways to complete this tutorial:
                    you can either write the code in your browser, or you can set up a local development environment on your computer.

                    Setup Option 1: Write Code in the Browser
                    This is the quickest way to get started!

                    First, open this Starter Code in a new tab.

                    The new tab should display an empty tic-tac-toe game board and React code. We will be editing the React code in this tutorial.

                    You can now skip the second setup option, and go to the Overview section to get an overview of React.

                    Setup Option 2: Local Development Environment
                    This is completely optional and not required for this tutorial!


                    Optional: Instructions for following along locally using your preferred text editor
                    Help, I’m Stuck!
                    If you get stuck, check out the community support resources.

                    In particular, Reactiflux Chat is a great way to get help quickly.

                    If you don’t receive an answer, or if you remain stuck,
                    please file an issue, and we’ll help you out.

                    Overview
                    Now that you’re set up, let’s get an overview of React!

                    What Is React?
                    React is a declarative, efficient, and flexible JavaScript library for building user interfaces.

                    It lets you compose complex UIs from small and isolated pieces of code called “components”.

                    React has a few different kinds of components, but we’ll start with React.Component subclasses:

                    We’ll get to the funny XML-like tags soon. We use components to tell React what we want to see on the screen.

                    When our data changes, React will efficiently update and re-render our components.

                    Here, ShoppingList is a React component class, or React component type. A component takes in parameters,
                    called props (short for “properties”), and returns a hierarchy of views to display via the render method.

                    The render method returns a description of what you want to see on the screen.

                    React takes the description and displays the result.

                    In particular, render returns a React element, which is a lightweight description of what to render.

                    Most React developers use a special syntax called “JSX” which makes these structures easier to write.

                    The div syntax is transformed at build time to React.createElement('div').

                    The example above is equivalent to:

                    See full expanded version.

                    If you’re curious, createElement() is described in more detail in the API reference,
                    but we won’t be using it in this tutorial.

                    Instead, we will keep using JSX.

                    JSX comes with the full power of JavaScript. You can put any JavaScript expressions within braces inside JSX.

                    Each React element is a JavaScript object that you can store in a variable or pass around in your program.

                    The ShoppingList component above only renders built-in DOM components like and .

                    But you can compose and render custom React components too.

                    For example, we can now refer to the whole shopping list by writing ShoppingList.

                    Each React component is encapsulated and can operate independently;
                    this allows you to build complex UIs from simple components.

                    Inspecting the Starter Code

                    If you’re going to work on the tutorial in your browser, open this code in a new tab: Starter Code.

                    If you’re going to work on the tutorial locally, instead open src/index.js in your project folder (you have already touched this file during the setup).

                    This Starter Code is the base of what we’re building. We’ve provided the CSS styling so that you only need to focus on learning React and programming the tic-tac-toe game.

                    By inspecting the code, you’ll notice that we have three React components:

                    Square
                    Board
                    Game
                    The Square component renders a single and the Board renders 9 squares.

                    The Game component renders a board with placeholder values which we’ll modify later.

                    There are currently no interactive components.

                    Passing Data Through Props
                    To get our feet wet, let’s try passing some data from our Board component to our Square component.

                    We strongly recommend typing code by hand as you’re working through the tutorial and not using copy/paste.

                    This will help you develop muscle memory and a stronger understanding.

                    In Board’s renderSquare method, change the code to pass a prop called value to the Square:
                </p>

                <p>What Are We Building?
                    In this tutorial, we’ll show how to build an interactive tic-tac-toe game with React.

                    You can see what we’ll be building here: Final Result.

                    If the code doesn’t make sense to you, or if you are unfamiliar with the code’s syntax, don’t worry!

                    The goal of this tutorial is to help you understand React and its syntax.

                    We recommend that you check out the tic-tac-toe game before continuing with the tutorial.

                    One of the features that you’ll notice is that there is a numbered list to the right of the game’s board.

                    This list gives you a history of all of the moves that have occurred in the game, and it is updated as the game progresses.

                    You can close the tic-tac-toe game once you’re familiar with it. We’ll be starting from a simpler template in this tutorial.

                    Our next step is to set you up so that you can start building the game.

                    Prerequisites
                    We’ll assume that you have some familiarity with HTML and JavaScript,
                    but you should be able to follow along even if you’re coming from a different programming language.

                    We’ll also assume that you’re familiar with programming concepts like functions, objects, arrays, and to a lesser extent, classes.

                    If you need to review JavaScript, we recommend reading this guide.

                    Note that we’re also using some features from ES6 — a recent version of JavaScript. In this tutorial, we’re using arrow functions, classes, let, and const statements.

                    You can use the Babel REPL to check what ES6 code compiles to.

                    Setup for the Tutorial
                    There are two ways to complete this tutorial:
                    you can either write the code in your browser, or you can set up a local development environment on your computer.

                    Setup Option 1: Write Code in the Browser
                    This is the quickest way to get started!

                    First, open this Starter Code in a new tab.

                    The new tab should display an empty tic-tac-toe game board and React code. We will be editing the React code in this tutorial.

                    You can now skip the second setup option, and go to the Overview section to get an overview of React.

                    Setup Option 2: Local Development Environment
                    This is completely optional and not required for this tutorial!


                    Optional: Instructions for following along locally using your preferred text editor
                    Help, I’m Stuck!
                    If you get stuck, check out the community support resources.

                    In particular, Reactiflux Chat is a great way to get help quickly.

                    If you don’t receive an answer, or if you remain stuck,
                    please file an issue, and we’ll help you out.

                    Overview
                    Now that you’re set up, let’s get an overview of React!

                    What Is React?
                    React is a declarative, efficient, and flexible JavaScript library for building user interfaces.

                    It lets you compose complex UIs from small and isolated pieces of code called “components”.

                    React has a few different kinds of components, but we’ll start with React.Component subclasses:

                    We’ll get to the funny XML-like tags soon. We use components to tell React what we want to see on the screen.

                    When our data changes, React will efficiently update and re-render our components.

                    Here, ShoppingList is a React component class, or React component type. A component takes in parameters,
                    called props (short for “properties”), and returns a hierarchy of views to display via the render method.

                    The render method returns a description of what you want to see on the screen.

                    React takes the description and displays the result.

                    In particular, render returns a React element, which is a lightweight description of what to render.

                    Most React developers use a special syntax called “JSX” which makes these structures easier to write.

                    The div syntax is transformed at build time to React.createElement('div').

                    The example above is equivalent to:

                    See full expanded version.

                    If you’re curious, createElement() is described in more detail in the API reference,
                    but we won’t be using it in this tutorial.

                    Instead, we will keep using JSX.

                    JSX comes with the full power of JavaScript. You can put any JavaScript expressions within braces inside JSX.

                    Each React element is a JavaScript object that you can store in a variable or pass around in your program.

                    The ShoppingList component above only renders built-in DOM components like and .

                    But you can compose and render custom React components too.

                    For example, we can now refer to the whole shopping list by writing ShoppingList.

                    Each React component is encapsulated and can operate independently;
                    this allows you to build complex UIs from simple components.

                    Inspecting the Starter Code

                    If you’re going to work on the tutorial in your browser, open this code in a new tab: Starter Code.

                    If you’re going to work on the tutorial locally, instead open src/index.js in your project folder (you have already touched this file during the setup).

                    This Starter Code is the base of what we’re building. We’ve provided the CSS styling so that you only need to focus on learning React and programming the tic-tac-toe game.

                    By inspecting the code, you’ll notice that we have three React components:

                    Square
                    Board
                    Game
                    The Square component renders a single and the Board renders 9 squares.

                    The Game component renders a board with placeholder values which we’ll modify later.

                    There are currently no interactive components.

                    Passing Data Through Props
                    To get our feet wet, let’s try passing some data from our Board component to our Square component.

                    We strongly recommend typing code by hand as you’re working through the tutorial and not using copy/paste.

                    This will help you develop muscle memory and a stronger understanding.

                    In Board’s renderSquare method, change the code to pass a prop called value to the Square:
                </p>

                <p>What Are We Building?
                    In this tutorial, we’ll show how to build an interactive tic-tac-toe game with React.

                    You can see what we’ll be building here: Final Result.

                    If the code doesn’t make sense to you, or if you are unfamiliar with the code’s syntax, don’t worry!

                    The goal of this tutorial is to help you understand React and its syntax.

                    We recommend that you check out the tic-tac-toe game before continuing with the tutorial.

                    One of the features that you’ll notice is that there is a numbered list to the right of the game’s board.

                    This list gives you a history of all of the moves that have occurred in the game, and it is updated as the game progresses.

                    You can close the tic-tac-toe game once you’re familiar with it. We’ll be starting from a simpler template in this tutorial.

                    Our next step is to set you up so that you can start building the game.

                    Prerequisites
                    We’ll assume that you have some familiarity with HTML and JavaScript,
                    but you should be able to follow along even if you’re coming from a different programming language.

                    We’ll also assume that you’re familiar with programming concepts like functions, objects, arrays, and to a lesser extent, classes.

                    If you need to review JavaScript, we recommend reading this guide.

                    Note that we’re also using some features from ES6 — a recent version of JavaScript. In this tutorial, we’re using arrow functions, classes, let, and const statements.

                    You can use the Babel REPL to check what ES6 code compiles to.

                    Setup for the Tutorial
                    There are two ways to complete this tutorial:
                    you can either write the code in your browser, or you can set up a local development environment on your computer.

                    Setup Option 1: Write Code in the Browser
                    This is the quickest way to get started!

                    First, open this Starter Code in a new tab.

                    The new tab should display an empty tic-tac-toe game board and React code. We will be editing the React code in this tutorial.

                    You can now skip the second setup option, and go to the Overview section to get an overview of React.

                    Setup Option 2: Local Development Environment
                    This is completely optional and not required for this tutorial!


                    Optional: Instructions for following along locally using your preferred text editor
                    Help, I’m Stuck!
                    If you get stuck, check out the community support resources.

                    In particular, Reactiflux Chat is a great way to get help quickly.

                    If you don’t receive an answer, or if you remain stuck,
                    please file an issue, and we’ll help you out.

                    Overview
                    Now that you’re set up, let’s get an overview of React!

                    What Is React?
                    React is a declarative, efficient, and flexible JavaScript library for building user interfaces.

                    It lets you compose complex UIs from small and isolated pieces of code called “components”.

                    React has a few different kinds of components, but we’ll start with React.Component subclasses:

                    We’ll get to the funny XML-like tags soon. We use components to tell React what we want to see on the screen.

                    When our data changes, React will efficiently update and re-render our components.

                    Here, ShoppingList is a React component class, or React component type. A component takes in parameters,
                    called props (short for “properties”), and returns a hierarchy of views to display via the render method.

                    The render method returns a description of what you want to see on the screen.

                    React takes the description and displays the result.

                    In particular, render returns a React element, which is a lightweight description of what to render.

                    Most React developers use a special syntax called “JSX” which makes these structures easier to write.

                    The div syntax is transformed at build time to React.createElement('div').

                    The example above is equivalent to:

                    See full expanded version.

                    If you’re curious, createElement() is described in more detail in the API reference,
                    but we won’t be using it in this tutorial.

                    Instead, we will keep using JSX.

                    JSX comes with the full power of JavaScript. You can put any JavaScript expressions within braces inside JSX.

                    Each React element is a JavaScript object that you can store in a variable or pass around in your program.

                    The ShoppingList component above only renders built-in DOM components like and .

                    But you can compose and render custom React components too.

                    For example, we can now refer to the whole shopping list by writing ShoppingList.

                    Each React component is encapsulated and can operate independently;
                    this allows you to build complex UIs from simple components.

                    Inspecting the Starter Code

                    If you’re going to work on the tutorial in your browser, open this code in a new tab: Starter Code.

                    If you’re going to work on the tutorial locally, instead open src/index.js in your project folder (you have already touched this file during the setup).

                    This Starter Code is the base of what we’re building. We’ve provided the CSS styling so that you only need to focus on learning React and programming the tic-tac-toe game.

                    By inspecting the code, you’ll notice that we have three React components:

                    Square
                    Board
                    Game
                    The Square component renders a single and the Board renders 9 squares.

                    The Game component renders a board with placeholder values which we’ll modify later.

                    There are currently no interactive components.

                    Passing Data Through Props
                    To get our feet wet, let’s try passing some data from our Board component to our Square component.

                    We strongly recommend typing code by hand as you’re working through the tutorial and not using copy/paste.

                    This will help you develop muscle memory and a stronger understanding.

                    In Board’s renderSquare method, change the code to pass a prop called value to the Square:
                </p>

                <p>What Are We Building?
                    In this tutorial, we’ll show how to build an interactive tic-tac-toe game with React.

                    You can see what we’ll be building here: Final Result.

                    If the code doesn’t make sense to you, or if you are unfamiliar with the code’s syntax, don’t worry!

                    The goal of this tutorial is to help you understand React and its syntax.

                    We recommend that you check out the tic-tac-toe game before continuing with the tutorial.

                    One of the features that you’ll notice is that there is a numbered list to the right of the game’s board.

                    This list gives you a history of all of the moves that have occurred in the game, and it is updated as the game progresses.

                    You can close the tic-tac-toe game once you’re familiar with it. We’ll be starting from a simpler template in this tutorial.

                    Our next step is to set you up so that you can start building the game.

                    Prerequisites
                    We’ll assume that you have some familiarity with HTML and JavaScript,
                    but you should be able to follow along even if you’re coming from a different programming language.

                    We’ll also assume that you’re familiar with programming concepts like functions, objects, arrays, and to a lesser extent, classes.

                    If you need to review JavaScript, we recommend reading this guide.

                    Note that we’re also using some features from ES6 — a recent version of JavaScript. In this tutorial, we’re using arrow functions, classes, let, and const statements.

                    You can use the Babel REPL to check what ES6 code compiles to.

                    Setup for the Tutorial
                    There are two ways to complete this tutorial:
                    you can either write the code in your browser, or you can set up a local development environment on your computer.

                    Setup Option 1: Write Code in the Browser
                    This is the quickest way to get started!

                    First, open this Starter Code in a new tab.

                    The new tab should display an empty tic-tac-toe game board and React code. We will be editing the React code in this tutorial.

                    You can now skip the second setup option, and go to the Overview section to get an overview of React.

                    Setup Option 2: Local Development Environment
                    This is completely optional and not required for this tutorial!


                    Optional: Instructions for following along locally using your preferred text editor
                    Help, I’m Stuck!
                    If you get stuck, check out the community support resources.

                    In particular, Reactiflux Chat is a great way to get help quickly.

                    If you don’t receive an answer, or if you remain stuck,
                    please file an issue, and we’ll help you out.

                    Overview
                    Now that you’re set up, let’s get an overview of React!

                    What Is React?
                    React is a declarative, efficient, and flexible JavaScript library for building user interfaces.

                    It lets you compose complex UIs from small and isolated pieces of code called “components”.

                    React has a few different kinds of components, but we’ll start with React.Component subclasses:

                    We’ll get to the funny XML-like tags soon. We use components to tell React what we want to see on the screen.

                    When our data changes, React will efficiently update and re-render our components.

                    Here, ShoppingList is a React component class, or React component type. A component takes in parameters,
                    called props (short for “properties”), and returns a hierarchy of views to display via the render method.

                    The render method returns a description of what you want to see on the screen.

                    React takes the description and displays the result.

                    In particular, render returns a React element, which is a lightweight description of what to render.

                    Most React developers use a special syntax called “JSX” which makes these structures easier to write.

                    The div syntax is transformed at build time to React.createElement('div').

                    The example above is equivalent to:

                    See full expanded version.

                    If you’re curious, createElement() is described in more detail in the API reference,
                    but we won’t be using it in this tutorial.

                    Instead, we will keep using JSX.

                    JSX comes with the full power of JavaScript. You can put any JavaScript expressions within braces inside JSX.

                    Each React element is a JavaScript object that you can store in a variable or pass around in your program.

                    The ShoppingList component above only renders built-in DOM components like and .

                    But you can compose and render custom React components too.

                    For example, we can now refer to the whole shopping list by writing ShoppingList.

                    Each React component is encapsulated and can operate independently;
                    this allows you to build complex UIs from simple components.

                    Inspecting the Starter Code

                    If you’re going to work on the tutorial in your browser, open this code in a new tab: Starter Code.

                    If you’re going to work on the tutorial locally, instead open src/index.js in your project folder (you have already touched this file during the setup).

                    This Starter Code is the base of what we’re building. We’ve provided the CSS styling so that you only need to focus on learning React and programming the tic-tac-toe game.

                    By inspecting the code, you’ll notice that we have three React components:

                    Square
                    Board
                    Game
                    The Square component renders a single and the Board renders 9 squares.

                    The Game component renders a board with placeholder values which we’ll modify later.

                    There are currently no interactive components.

                    Passing Data Through Props
                    To get our feet wet, let’s try passing some data from our Board component to our Square component.

                    We strongly recommend typing code by hand as you’re working through the tutorial and not using copy/paste.

                    This will help you develop muscle memory and a stronger understanding.

                    In Board’s renderSquare method, change the code to pass a prop called value to the Square:
                </p>

                <p>What Are We Building?
                    In this tutorial, we’ll show how to build an interactive tic-tac-toe game with React.

                    You can see what we’ll be building here: Final Result.

                    If the code doesn’t make sense to you, or if you are unfamiliar with the code’s syntax, don’t worry!

                    The goal of this tutorial is to help you understand React and its syntax.

                    We recommend that you check out the tic-tac-toe game before continuing with the tutorial.

                    One of the features that you’ll notice is that there is a numbered list to the right of the game’s board.

                    This list gives you a history of all of the moves that have occurred in the game, and it is updated as the game progresses.

                    You can close the tic-tac-toe game once you’re familiar with it. We’ll be starting from a simpler template in this tutorial.

                    Our next step is to set you up so that you can start building the game.

                    Prerequisites
                    We’ll assume that you have some familiarity with HTML and JavaScript,
                    but you should be able to follow along even if you’re coming from a different programming language.

                    We’ll also assume that you’re familiar with programming concepts like functions, objects, arrays, and to a lesser extent, classes.

                    If you need to review JavaScript, we recommend reading this guide.

                    Note that we’re also using some features from ES6 — a recent version of JavaScript. In this tutorial, we’re using arrow functions, classes, let, and const statements.

                    You can use the Babel REPL to check what ES6 code compiles to.

                    Setup for the Tutorial
                    There are two ways to complete this tutorial:
                    you can either write the code in your browser, or you can set up a local development environment on your computer.

                    Setup Option 1: Write Code in the Browser
                    This is the quickest way to get started!

                    First, open this Starter Code in a new tab.

                    The new tab should display an empty tic-tac-toe game board and React code. We will be editing the React code in this tutorial.

                    You can now skip the second setup option, and go to the Overview section to get an overview of React.

                    Setup Option 2: Local Development Environment
                    This is completely optional and not required for this tutorial!


                    Optional: Instructions for following along locally using your preferred text editor
                    Help, I’m Stuck!
                    If you get stuck, check out the community support resources.

                    In particular, Reactiflux Chat is a great way to get help quickly.

                    If you don’t receive an answer, or if you remain stuck,
                    please file an issue, and we’ll help you out.

                    Overview
                    Now that you’re set up, let’s get an overview of React!

                    What Is React?
                    React is a declarative, efficient, and flexible JavaScript library for building user interfaces.

                    It lets you compose complex UIs from small and isolated pieces of code called “components”.

                    React has a few different kinds of components, but we’ll start with React.Component subclasses:

                    We’ll get to the funny XML-like tags soon. We use components to tell React what we want to see on the screen.

                    When our data changes, React will efficiently update and re-render our components.

                    Here, ShoppingList is a React component class, or React component type. A component takes in parameters,
                    called props (short for “properties”), and returns a hierarchy of views to display via the render method.

                    The render method returns a description of what you want to see on the screen.

                    React takes the description and displays the result.

                    In particular, render returns a React element, which is a lightweight description of what to render.

                    Most React developers use a special syntax called “JSX” which makes these structures easier to write.

                    The div syntax is transformed at build time to React.createElement('div').

                    The example above is equivalent to:

                    See full expanded version.

                    If you’re curious, createElement() is described in more detail in the API reference,
                    but we won’t be using it in this tutorial.

                    Instead, we will keep using JSX.

                    JSX comes with the full power of JavaScript. You can put any JavaScript expressions within braces inside JSX.

                    Each React element is a JavaScript object that you can store in a variable or pass around in your program.

                    The ShoppingList component above only renders built-in DOM components like and .

                    But you can compose and render custom React components too.

                    For example, we can now refer to the whole shopping list by writing ShoppingList.

                    Each React component is encapsulated and can operate independently;
                    this allows you to build complex UIs from simple components.

                    Inspecting the Starter Code

                    If you’re going to work on the tutorial in your browser, open this code in a new tab: Starter Code.

                    If you’re going to work on the tutorial locally, instead open src/index.js in your project folder (you have already touched this file during the setup).

                    This Starter Code is the base of what we’re building. We’ve provided the CSS styling so that you only need to focus on learning React and programming the tic-tac-toe game.

                    By inspecting the code, you’ll notice that we have three React components:

                    Square
                    Board
                    Game
                    The Square component renders a single and the Board renders 9 squares.

                    The Game component renders a board with placeholder values which we’ll modify later.

                    There are currently no interactive components.

                    Passing Data Through Props
                    To get our feet wet, let’s try passing some data from our Board component to our Square component.

                    We strongly recommend typing code by hand as you’re working through the tutorial and not using copy/paste.

                    This will help you develop muscle memory and a stronger understanding.

                    In Board’s renderSquare method, change the code to pass a prop called value to the Square:
                </p>

                <p>What Are We Building?
                    In this tutorial, we’ll show how to build an interactive tic-tac-toe game with React.

                    You can see what we’ll be building here: Final Result.

                    If the code doesn’t make sense to you, or if you are unfamiliar with the code’s syntax, don’t worry!

                    The goal of this tutorial is to help you understand React and its syntax.

                    We recommend that you check out the tic-tac-toe game before continuing with the tutorial.

                    One of the features that you’ll notice is that there is a numbered list to the right of the game’s board.

                    This list gives you a history of all of the moves that have occurred in the game, and it is updated as the game progresses.

                    You can close the tic-tac-toe game once you’re familiar with it. We’ll be starting from a simpler template in this tutorial.

                    Our next step is to set you up so that you can start building the game.

                    Prerequisites
                    We’ll assume that you have some familiarity with HTML and JavaScript,
                    but you should be able to follow along even if you’re coming from a different programming language.

                    We’ll also assume that you’re familiar with programming concepts like functions, objects, arrays, and to a lesser extent, classes.

                    If you need to review JavaScript, we recommend reading this guide.

                    Note that we’re also using some features from ES6 — a recent version of JavaScript. In this tutorial, we’re using arrow functions, classes, let, and const statements.

                    You can use the Babel REPL to check what ES6 code compiles to.

                    Setup for the Tutorial
                    There are two ways to complete this tutorial:
                    you can either write the code in your browser, or you can set up a local development environment on your computer.

                    Setup Option 1: Write Code in the Browser
                    This is the quickest way to get started!

                    First, open this Starter Code in a new tab.

                    The new tab should display an empty tic-tac-toe game board and React code. We will be editing the React code in this tutorial.

                    You can now skip the second setup option, and go to the Overview section to get an overview of React.

                    Setup Option 2: Local Development Environment
                    This is completely optional and not required for this tutorial!


                    Optional: Instructions for following along locally using your preferred text editor
                    Help, I’m Stuck!
                    If you get stuck, check out the community support resources.

                    In particular, Reactiflux Chat is a great way to get help quickly.

                    If you don’t receive an answer, or if you remain stuck,
                    please file an issue, and we’ll help you out.

                    Overview
                    Now that you’re set up, let’s get an overview of React!

                    What Is React?
                    React is a declarative, efficient, and flexible JavaScript library for building user interfaces.

                    It lets you compose complex UIs from small and isolated pieces of code called “components”.

                    React has a few different kinds of components, but we’ll start with React.Component subclasses:

                    We’ll get to the funny XML-like tags soon. We use components to tell React what we want to see on the screen.

                    When our data changes, React will efficiently update and re-render our components.

                    Here, ShoppingList is a React component class, or React component type. A component takes in parameters,
                    called props (short for “properties”), and returns a hierarchy of views to display via the render method.

                    The render method returns a description of what you want to see on the screen.

                    React takes the description and displays the result.

                    In particular, render returns a React element, which is a lightweight description of what to render.

                    Most React developers use a special syntax called “JSX” which makes these structures easier to write.

                    The div syntax is transformed at build time to React.createElement('div').

                    The example above is equivalent to:

                    See full expanded version.

                    If you’re curious, createElement() is described in more detail in the API reference,
                    but we won’t be using it in this tutorial.

                    Instead, we will keep using JSX.

                    JSX comes with the full power of JavaScript. You can put any JavaScript expressions within braces inside JSX.

                    Each React element is a JavaScript object that you can store in a variable or pass around in your program.

                    The ShoppingList component above only renders built-in DOM components like and .

                    But you can compose and render custom React components too.

                    For example, we can now refer to the whole shopping list by writing ShoppingList.

                    Each React component is encapsulated and can operate independently;
                    this allows you to build complex UIs from simple components.

                    Inspecting the Starter Code

                    If you’re going to work on the tutorial in your browser, open this code in a new tab: Starter Code.

                    If you’re going to work on the tutorial locally, instead open src/index.js in your project folder (you have already touched this file during the setup).

                    This Starter Code is the base of what we’re building. We’ve provided the CSS styling so that you only need to focus on learning React and programming the tic-tac-toe game.

                    By inspecting the code, you’ll notice that we have three React components:

                    Square
                    Board
                    Game
                    The Square component renders a single and the Board renders 9 squares.

                    The Game component renders a board with placeholder values which we’ll modify later.

                    There are currently no interactive components.

                    Passing Data Through Props
                    To get our feet wet, let’s try passing some data from our Board component to our Square component.

                    We strongly recommend typing code by hand as you’re working through the tutorial and not using copy/paste.

                    This will help you develop muscle memory and a stronger understanding.

                    In Board’s renderSquare method, change the code to pass a prop called value to the Square:
                </p>

                <p>What Are We Building?
                    In this tutorial, we’ll show how to build an interactive tic-tac-toe game with React.

                    You can see what we’ll be building here: Final Result.

                    If the code doesn’t make sense to you, or if you are unfamiliar with the code’s syntax, don’t worry!

                    The goal of this tutorial is to help you understand React and its syntax.

                    We recommend that you check out the tic-tac-toe game before continuing with the tutorial.

                    One of the features that you’ll notice is that there is a numbered list to the right of the game’s board.

                    This list gives you a history of all of the moves that have occurred in the game, and it is updated as the game progresses.

                    You can close the tic-tac-toe game once you’re familiar with it. We’ll be starting from a simpler template in this tutorial.

                    Our next step is to set you up so that you can start building the game.

                    Prerequisites
                    We’ll assume that you have some familiarity with HTML and JavaScript,
                    but you should be able to follow along even if you’re coming from a different programming language.

                    We’ll also assume that you’re familiar with programming concepts like functions, objects, arrays, and to a lesser extent, classes.

                    If you need to review JavaScript, we recommend reading this guide.

                    Note that we’re also using some features from ES6 — a recent version of JavaScript. In this tutorial, we’re using arrow functions, classes, let, and const statements.

                    You can use the Babel REPL to check what ES6 code compiles to.

                    Setup for the Tutorial
                    There are two ways to complete this tutorial:
                    you can either write the code in your browser, or you can set up a local development environment on your computer.

                    Setup Option 1: Write Code in the Browser
                    This is the quickest way to get started!

                    First, open this Starter Code in a new tab.

                    The new tab should display an empty tic-tac-toe game board and React code. We will be editing the React code in this tutorial.

                    You can now skip the second setup option, and go to the Overview section to get an overview of React.

                    Setup Option 2: Local Development Environment
                    This is completely optional and not required for this tutorial!


                    Optional: Instructions for following along locally using your preferred text editor
                    Help, I’m Stuck!
                    If you get stuck, check out the community support resources.

                    In particular, Reactiflux Chat is a great way to get help quickly.

                    If you don’t receive an answer, or if you remain stuck,
                    please file an issue, and we’ll help you out.

                    Overview
                    Now that you’re set up, let’s get an overview of React!

                    What Is React?
                    React is a declarative, efficient, and flexible JavaScript library for building user interfaces.

                    It lets you compose complex UIs from small and isolated pieces of code called “components”.

                    React has a few different kinds of components, but we’ll start with React.Component subclasses:

                    We’ll get to the funny XML-like tags soon. We use components to tell React what we want to see on the screen.

                    When our data changes, React will efficiently update and re-render our components.

                    Here, ShoppingList is a React component class, or React component type. A component takes in parameters,
                    called props (short for “properties”), and returns a hierarchy of views to display via the render method.

                    The render method returns a description of what you want to see on the screen.

                    React takes the description and displays the result.

                    In particular, render returns a React element, which is a lightweight description of what to render.

                    Most React developers use a special syntax called “JSX” which makes these structures easier to write.

                    The div syntax is transformed at build time to React.createElement('div').

                    The example above is equivalent to:

                    See full expanded version.

                    If you’re curious, createElement() is described in more detail in the API reference,
                    but we won’t be using it in this tutorial.

                    Instead, we will keep using JSX.

                    JSX comes with the full power of JavaScript. You can put any JavaScript expressions within braces inside JSX.

                    Each React element is a JavaScript object that you can store in a variable or pass around in your program.

                    The ShoppingList component above only renders built-in DOM components like and .

                    But you can compose and render custom React components too.

                    For example, we can now refer to the whole shopping list by writing ShoppingList.

                    Each React component is encapsulated and can operate independently;
                    this allows you to build complex UIs from simple components.

                    Inspecting the Starter Code

                    If you’re going to work on the tutorial in your browser, open this code in a new tab: Starter Code.

                    If you’re going to work on the tutorial locally, instead open src/index.js in your project folder (you have already touched this file during the setup).

                    This Starter Code is the base of what we’re building. We’ve provided the CSS styling so that you only need to focus on learning React and programming the tic-tac-toe game.

                    By inspecting the code, you’ll notice that we have three React components:

                    Square
                    Board
                    Game
                    The Square component renders a single and the Board renders 9 squares.

                    The Game component renders a board with placeholder values which we’ll modify later.

                    There are currently no interactive components.

                    Passing Data Through Props
                    To get our feet wet, let’s try passing some data from our Board component to our Square component.

                    We strongly recommend typing code by hand as you’re working through the tutorial and not using copy/paste.

                    This will help you develop muscle memory and a stronger understanding.

                    In Board’s renderSquare method, change the code to pass a prop called value to the Square:
                </p>

                <p>What Are We Building?
                    In this tutorial, we’ll show how to build an interactive tic-tac-toe game with React.

                    You can see what we’ll be building here: Final Result.

                    If the code doesn’t make sense to you, or if you are unfamiliar with the code’s syntax, don’t worry!

                    The goal of this tutorial is to help you understand React and its syntax.

                    We recommend that you check out the tic-tac-toe game before continuing with the tutorial.

                    One of the features that you’ll notice is that there is a numbered list to the right of the game’s board.

                    This list gives you a history of all of the moves that have occurred in the game, and it is updated as the game progresses.

                    You can close the tic-tac-toe game once you’re familiar with it. We’ll be starting from a simpler template in this tutorial.

                    Our next step is to set you up so that you can start building the game.

                    Prerequisites
                    We’ll assume that you have some familiarity with HTML and JavaScript,
                    but you should be able to follow along even if you’re coming from a different programming language.

                    We’ll also assume that you’re familiar with programming concepts like functions, objects, arrays, and to a lesser extent, classes.

                    If you need to review JavaScript, we recommend reading this guide.

                    Note that we’re also using some features from ES6 — a recent version of JavaScript. In this tutorial, we’re using arrow functions, classes, let, and const statements.

                    You can use the Babel REPL to check what ES6 code compiles to.

                    Setup for the Tutorial
                    There are two ways to complete this tutorial:
                    you can either write the code in your browser, or you can set up a local development environment on your computer.

                    Setup Option 1: Write Code in the Browser
                    This is the quickest way to get started!

                    First, open this Starter Code in a new tab.

                    The new tab should display an empty tic-tac-toe game board and React code. We will be editing the React code in this tutorial.

                    You can now skip the second setup option, and go to the Overview section to get an overview of React.

                    Setup Option 2: Local Development Environment
                    This is completely optional and not required for this tutorial!


                    Optional: Instructions for following along locally using your preferred text editor
                    Help, I’m Stuck!
                    If you get stuck, check out the community support resources.

                    In particular, Reactiflux Chat is a great way to get help quickly.

                    If you don’t receive an answer, or if you remain stuck,
                    please file an issue, and we’ll help you out.

                    Overview
                    Now that you’re set up, let’s get an overview of React!

                    What Is React?
                    React is a declarative, efficient, and flexible JavaScript library for building user interfaces.

                    It lets you compose complex UIs from small and isolated pieces of code called “components”.

                    React has a few different kinds of components, but we’ll start with React.Component subclasses:

                    We’ll get to the funny XML-like tags soon. We use components to tell React what we want to see on the screen.

                    When our data changes, React will efficiently update and re-render our components.

                    Here, ShoppingList is a React component class, or React component type. A component takes in parameters,
                    called props (short for “properties”), and returns a hierarchy of views to display via the render method.

                    The render method returns a description of what you want to see on the screen.

                    React takes the description and displays the result.

                    In particular, render returns a React element, which is a lightweight description of what to render.

                    Most React developers use a special syntax called “JSX” which makes these structures easier to write.

                    The div syntax is transformed at build time to React.createElement('div').

                    The example above is equivalent to:

                    See full expanded version.

                    If you’re curious, createElement() is described in more detail in the API reference,
                    but we won’t be using it in this tutorial.

                    Instead, we will keep using JSX.

                    JSX comes with the full power of JavaScript. You can put any JavaScript expressions within braces inside JSX.

                    Each React element is a JavaScript object that you can store in a variable or pass around in your program.

                    The ShoppingList component above only renders built-in DOM components like and .

                    But you can compose and render custom React components too.

                    For example, we can now refer to the whole shopping list by writing ShoppingList.

                    Each React component is encapsulated and can operate independently;
                    this allows you to build complex UIs from simple components.

                    Inspecting the Starter Code

                    If you’re going to work on the tutorial in your browser, open this code in a new tab: Starter Code.

                    If you’re going to work on the tutorial locally, instead open src/index.js in your project folder (you have already touched this file during the setup).

                    This Starter Code is the base of what we’re building. We’ve provided the CSS styling so that you only need to focus on learning React and programming the tic-tac-toe game.

                    By inspecting the code, you’ll notice that we have three React components:

                    Square
                    Board
                    Game
                    The Square component renders a single and the Board renders 9 squares.

                    The Game component renders a board with placeholder values which we’ll modify later.

                    There are currently no interactive components.

                    Passing Data Through Props
                    To get our feet wet, let’s try passing some data from our Board component to our Square component.

                    We strongly recommend typing code by hand as you’re working through the tutorial and not using copy/paste.

                    This will help you develop muscle memory and a stronger understanding.

                    In Board’s renderSquare method, change the code to pass a prop called value to the Square:
                </p>

                <p>What Are We Building?
                    In this tutorial, we’ll show how to build an interactive tic-tac-toe game with React.

                    You can see what we’ll be building here: Final Result.

                    If the code doesn’t make sense to you, or if you are unfamiliar with the code’s syntax, don’t worry!

                    The goal of this tutorial is to help you understand React and its syntax.

                    We recommend that you check out the tic-tac-toe game before continuing with the tutorial.

                    One of the features that you’ll notice is that there is a numbered list to the right of the game’s board.

                    This list gives you a history of all of the moves that have occurred in the game, and it is updated as the game progresses.

                    You can close the tic-tac-toe game once you’re familiar with it. We’ll be starting from a simpler template in this tutorial.

                    Our next step is to set you up so that you can start building the game.

                    Prerequisites
                    We’ll assume that you have some familiarity with HTML and JavaScript,
                    but you should be able to follow along even if you’re coming from a different programming language.

                    We’ll also assume that you’re familiar with programming concepts like functions, objects, arrays, and to a lesser extent, classes.

                    If you need to review JavaScript, we recommend reading this guide.

                    Note that we’re also using some features from ES6 — a recent version of JavaScript. In this tutorial, we’re using arrow functions, classes, let, and const statements.

                    You can use the Babel REPL to check what ES6 code compiles to.

                    Setup for the Tutorial
                    There are two ways to complete this tutorial:
                    you can either write the code in your browser, or you can set up a local development environment on your computer.

                    Setup Option 1: Write Code in the Browser
                    This is the quickest way to get started!

                    First, open this Starter Code in a new tab.

                    The new tab should display an empty tic-tac-toe game board and React code. We will be editing the React code in this tutorial.

                    You can now skip the second setup option, and go to the Overview section to get an overview of React.

                    Setup Option 2: Local Development Environment
                    This is completely optional and not required for this tutorial!


                    Optional: Instructions for following along locally using your preferred text editor
                    Help, I’m Stuck!
                    If you get stuck, check out the community support resources.

                    In particular, Reactiflux Chat is a great way to get help quickly.

                    If you don’t receive an answer, or if you remain stuck,
                    please file an issue, and we’ll help you out.

                    Overview
                    Now that you’re set up, let’s get an overview of React!

                    What Is React?
                    React is a declarative, efficient, and flexible JavaScript library for building user interfaces.

                    It lets you compose complex UIs from small and isolated pieces of code called “components”.

                    React has a few different kinds of components, but we’ll start with React.Component subclasses:

                    We’ll get to the funny XML-like tags soon. We use components to tell React what we want to see on the screen.

                    When our data changes, React will efficiently update and re-render our components.

                    Here, ShoppingList is a React component class, or React component type. A component takes in parameters,
                    called props (short for “properties”), and returns a hierarchy of views to display via the render method.

                    The render method returns a description of what you want to see on the screen.

                    React takes the description and displays the result.

                    In particular, render returns a React element, which is a lightweight description of what to render.

                    Most React developers use a special syntax called “JSX” which makes these structures easier to write.

                    The div syntax is transformed at build time to React.createElement('div').

                    The example above is equivalent to:

                    See full expanded version.

                    If you’re curious, createElement() is described in more detail in the API reference,
                    but we won’t be using it in this tutorial.

                    Instead, we will keep using JSX.

                    JSX comes with the full power of JavaScript. You can put any JavaScript expressions within braces inside JSX.

                    Each React element is a JavaScript object that you can store in a variable or pass around in your program.

                    The ShoppingList component above only renders built-in DOM components like and .

                    But you can compose and render custom React components too.

                    For example, we can now refer to the whole shopping list by writing ShoppingList.

                    Each React component is encapsulated and can operate independently;
                    this allows you to build complex UIs from simple components.

                    Inspecting the Starter Code

                    If you’re going to work on the tutorial in your browser, open this code in a new tab: Starter Code.

                    If you’re going to work on the tutorial locally, instead open src/index.js in your project folder (you have already touched this file during the setup).

                    This Starter Code is the base of what we’re building. We’ve provided the CSS styling so that you only need to focus on learning React and programming the tic-tac-toe game.

                    By inspecting the code, you’ll notice that we have three React components:

                    Square
                    Board
                    Game
                    The Square component renders a single and the Board renders 9 squares.

                    The Game component renders a board with placeholder values which we’ll modify later.

                    There are currently no interactive components.

                    Passing Data Through Props
                    To get our feet wet, let’s try passing some data from our Board component to our Square component.

                    We strongly recommend typing code by hand as you’re working through the tutorial and not using copy/paste.

                    This will help you develop muscle memory and a stronger understanding.

                    In Board’s renderSquare method, change the code to pass a prop called value to the Square:
                </p>

                <p>What Are We Building?
                    In this tutorial, we’ll show how to build an interactive tic-tac-toe game with React.

                    You can see what we’ll be building here: Final Result.

                    If the code doesn’t make sense to you, or if you are unfamiliar with the code’s syntax, don’t worry!

                    The goal of this tutorial is to help you understand React and its syntax.

                    We recommend that you check out the tic-tac-toe game before continuing with the tutorial.

                    One of the features that you’ll notice is that there is a numbered list to the right of the game’s board.

                    This list gives you a history of all of the moves that have occurred in the game, and it is updated as the game progresses.

                    You can close the tic-tac-toe game once you’re familiar with it. We’ll be starting from a simpler template in this tutorial.

                    Our next step is to set you up so that you can start building the game.

                    Prerequisites
                    We’ll assume that you have some familiarity with HTML and JavaScript,
                    but you should be able to follow along even if you’re coming from a different programming language.

                    We’ll also assume that you’re familiar with programming concepts like functions, objects, arrays, and to a lesser extent, classes.

                    If you need to review JavaScript, we recommend reading this guide.

                    Note that we’re also using some features from ES6 — a recent version of JavaScript. In this tutorial, we’re using arrow functions, classes, let, and const statements.

                    You can use the Babel REPL to check what ES6 code compiles to.

                    Setup for the Tutorial
                    There are two ways to complete this tutorial:
                    you can either write the code in your browser, or you can set up a local development environment on your computer.

                    Setup Option 1: Write Code in the Browser
                    This is the quickest way to get started!

                    First, open this Starter Code in a new tab.

                    The new tab should display an empty tic-tac-toe game board and React code. We will be editing the React code in this tutorial.

                    You can now skip the second setup option, and go to the Overview section to get an overview of React.

                    Setup Option 2: Local Development Environment
                    This is completely optional and not required for this tutorial!


                    Optional: Instructions for following along locally using your preferred text editor
                    Help, I’m Stuck!
                    If you get stuck, check out the community support resources.

                    In particular, Reactiflux Chat is a great way to get help quickly.

                    If you don’t receive an answer, or if you remain stuck,
                    please file an issue, and we’ll help you out.

                    Overview
                    Now that you’re set up, let’s get an overview of React!

                    What Is React?
                    React is a declarative, efficient, and flexible JavaScript library for building user interfaces.

                    It lets you compose complex UIs from small and isolated pieces of code called “components”.

                    React has a few different kinds of components, but we’ll start with React.Component subclasses:

                    We’ll get to the funny XML-like tags soon. We use components to tell React what we want to see on the screen.

                    When our data changes, React will efficiently update and re-render our components.

                    Here, ShoppingList is a React component class, or React component type. A component takes in parameters,
                    called props (short for “properties”), and returns a hierarchy of views to display via the render method.

                    The render method returns a description of what you want to see on the screen.

                    React takes the description and displays the result.

                    In particular, render returns a React element, which is a lightweight description of what to render.

                    Most React developers use a special syntax called “JSX” which makes these structures easier to write.

                    The div syntax is transformed at build time to React.createElement('div').

                    The example above is equivalent to:

                    See full expanded version.

                    If you’re curious, createElement() is described in more detail in the API reference,
                    but we won’t be using it in this tutorial.

                    Instead, we will keep using JSX.

                    JSX comes with the full power of JavaScript. You can put any JavaScript expressions within braces inside JSX.

                    Each React element is a JavaScript object that you can store in a variable or pass around in your program.

                    The ShoppingList component above only renders built-in DOM components like and .

                    But you can compose and render custom React components too.

                    For example, we can now refer to the whole shopping list by writing ShoppingList.

                    Each React component is encapsulated and can operate independently;
                    this allows you to build complex UIs from simple components.

                    Inspecting the Starter Code

                    If you’re going to work on the tutorial in your browser, open this code in a new tab: Starter Code.

                    If you’re going to work on the tutorial locally, instead open src/index.js in your project folder (you have already touched this file during the setup).

                    This Starter Code is the base of what we’re building. We’ve provided the CSS styling so that you only need to focus on learning React and programming the tic-tac-toe game.

                    By inspecting the code, you’ll notice that we have three React components:

                    Square
                    Board
                    Game
                    The Square component renders a single and the Board renders 9 squares.

                    The Game component renders a board with placeholder values which we’ll modify later.

                    There are currently no interactive components.

                    Passing Data Through Props
                    To get our feet wet, let’s try passing some data from our Board component to our Square component.

                    We strongly recommend typing code by hand as you’re working through the tutorial and not using copy/paste.

                    This will help you develop muscle memory and a stronger understanding.

                    In Board’s renderSquare method, change the code to pass a prop called value to the Square:
                </p>

                <p>What Are We Building?
                    In this tutorial, we’ll show how to build an interactive tic-tac-toe game with React.

                    You can see what we’ll be building here: Final Result.

                    If the code doesn’t make sense to you, or if you are unfamiliar with the code’s syntax, don’t worry!

                    The goal of this tutorial is to help you understand React and its syntax.

                    We recommend that you check out the tic-tac-toe game before continuing with the tutorial.

                    One of the features that you’ll notice is that there is a numbered list to the right of the game’s board.

                    This list gives you a history of all of the moves that have occurred in the game, and it is updated as the game progresses.

                    You can close the tic-tac-toe game once you’re familiar with it. We’ll be starting from a simpler template in this tutorial.

                    Our next step is to set you up so that you can start building the game.

                    Prerequisites
                    We’ll assume that you have some familiarity with HTML and JavaScript,
                    but you should be able to follow along even if you’re coming from a different programming language.

                    We’ll also assume that you’re familiar with programming concepts like functions, objects, arrays, and to a lesser extent, classes.

                    If you need to review JavaScript, we recommend reading this guide.

                    Note that we’re also using some features from ES6 — a recent version of JavaScript. In this tutorial, we’re using arrow functions, classes, let, and const statements.

                    You can use the Babel REPL to check what ES6 code compiles to.

                    Setup for the Tutorial
                    There are two ways to complete this tutorial:
                    you can either write the code in your browser, or you can set up a local development environment on your computer.

                    Setup Option 1: Write Code in the Browser
                    This is the quickest way to get started!

                    First, open this Starter Code in a new tab.

                    The new tab should display an empty tic-tac-toe game board and React code. We will be editing the React code in this tutorial.

                    You can now skip the second setup option, and go to the Overview section to get an overview of React.

                    Setup Option 2: Local Development Environment
                    This is completely optional and not required for this tutorial!


                    Optional: Instructions for following along locally using your preferred text editor
                    Help, I’m Stuck!
                    If you get stuck, check out the community support resources.

                    In particular, Reactiflux Chat is a great way to get help quickly.

                    If you don’t receive an answer, or if you remain stuck,
                    please file an issue, and we’ll help you out.

                    Overview
                    Now that you’re set up, let’s get an overview of React!

                    What Is React?
                    React is a declarative, efficient, and flexible JavaScript library for building user interfaces.

                    It lets you compose complex UIs from small and isolated pieces of code called “components”.

                    React has a few different kinds of components, but we’ll start with React.Component subclasses:

                    We’ll get to the funny XML-like tags soon. We use components to tell React what we want to see on the screen.

                    When our data changes, React will efficiently update and re-render our components.

                    Here, ShoppingList is a React component class, or React component type. A component takes in parameters,
                    called props (short for “properties”), and returns a hierarchy of views to display via the render method.

                    The render method returns a description of what you want to see on the screen.

                    React takes the description and displays the result.

                    In particular, render returns a React element, which is a lightweight description of what to render.

                    Most React developers use a special syntax called “JSX” which makes these structures easier to write.

                    The div syntax is transformed at build time to React.createElement('div').

                    The example above is equivalent to:

                    See full expanded version.

                    If you’re curious, createElement() is described in more detail in the API reference,
                    but we won’t be using it in this tutorial.

                    Instead, we will keep using JSX.

                    JSX comes with the full power of JavaScript. You can put any JavaScript expressions within braces inside JSX.

                    Each React element is a JavaScript object that you can store in a variable or pass around in your program.

                    The ShoppingList component above only renders built-in DOM components like and .

                    But you can compose and render custom React components too.

                    For example, we can now refer to the whole shopping list by writing ShoppingList.

                    Each React component is encapsulated and can operate independently;
                    this allows you to build complex UIs from simple components.

                    Inspecting the Starter Code

                    If you’re going to work on the tutorial in your browser, open this code in a new tab: Starter Code.

                    If you’re going to work on the tutorial locally, instead open src/index.js in your project folder (you have already touched this file during the setup).

                    This Starter Code is the base of what we’re building. We’ve provided the CSS styling so that you only need to focus on learning React and programming the tic-tac-toe game.

                    By inspecting the code, you’ll notice that we have three React components:

                    Square
                    Board
                    Game
                    The Square component renders a single and the Board renders 9 squares.

                    The Game component renders a board with placeholder values which we’ll modify later.

                    There are currently no interactive components.

                    Passing Data Through Props
                    To get our feet wet, let’s try passing some data from our Board component to our Square component.

                    We strongly recommend typing code by hand as you’re working through the tutorial and not using copy/paste.

                    This will help you develop muscle memory and a stronger understanding.

                    In Board’s renderSquare method, change the code to pass a prop called value to the Square:
                </p>

                <p>What Are We Building?
                    In this tutorial, we’ll show how to build an interactive tic-tac-toe game with React.

                    You can see what we’ll be building here: Final Result.

                    If the code doesn’t make sense to you, or if you are unfamiliar with the code’s syntax, don’t worry!

                    The goal of this tutorial is to help you understand React and its syntax.

                    We recommend that you check out the tic-tac-toe game before continuing with the tutorial.

                    One of the features that you’ll notice is that there is a numbered list to the right of the game’s board.

                    This list gives you a history of all of the moves that have occurred in the game, and it is updated as the game progresses.

                    You can close the tic-tac-toe game once you’re familiar with it. We’ll be starting from a simpler template in this tutorial.

                    Our next step is to set you up so that you can start building the game.

                    Prerequisites
                    We’ll assume that you have some familiarity with HTML and JavaScript,
                    but you should be able to follow along even if you’re coming from a different programming language.

                    We’ll also assume that you’re familiar with programming concepts like functions, objects, arrays, and to a lesser extent, classes.

                    If you need to review JavaScript, we recommend reading this guide.

                    Note that we’re also using some features from ES6 — a recent version of JavaScript. In this tutorial, we’re using arrow functions, classes, let, and const statements.

                    You can use the Babel REPL to check what ES6 code compiles to.

                    Setup for the Tutorial
                    There are two ways to complete this tutorial:
                    you can either write the code in your browser, or you can set up a local development environment on your computer.

                    Setup Option 1: Write Code in the Browser
                    This is the quickest way to get started!

                    First, open this Starter Code in a new tab.

                    The new tab should display an empty tic-tac-toe game board and React code. We will be editing the React code in this tutorial.

                    You can now skip the second setup option, and go to the Overview section to get an overview of React.

                    Setup Option 2: Local Development Environment
                    This is completely optional and not required for this tutorial!


                    Optional: Instructions for following along locally using your preferred text editor
                    Help, I’m Stuck!
                    If you get stuck, check out the community support resources.

                    In particular, Reactiflux Chat is a great way to get help quickly.

                    If you don’t receive an answer, or if you remain stuck,
                    please file an issue, and we’ll help you out.

                    Overview
                    Now that you’re set up, let’s get an overview of React!

                    What Is React?
                    React is a declarative, efficient, and flexible JavaScript library for building user interfaces.

                    It lets you compose complex UIs from small and isolated pieces of code called “components”.

                    React has a few different kinds of components, but we’ll start with React.Component subclasses:

                    We’ll get to the funny XML-like tags soon. We use components to tell React what we want to see on the screen.

                    When our data changes, React will efficiently update and re-render our components.

                    Here, ShoppingList is a React component class, or React component type. A component takes in parameters,
                    called props (short for “properties”), and returns a hierarchy of views to display via the render method.

                    The render method returns a description of what you want to see on the screen.

                    React takes the description and displays the result.

                    In particular, render returns a React element, which is a lightweight description of what to render.

                    Most React developers use a special syntax called “JSX” which makes these structures easier to write.

                    The div syntax is transformed at build time to React.createElement('div').

                    The example above is equivalent to:

                    See full expanded version.

                    If you’re curious, createElement() is described in more detail in the API reference,
                    but we won’t be using it in this tutorial.

                    Instead, we will keep using JSX.

                    JSX comes with the full power of JavaScript. You can put any JavaScript expressions within braces inside JSX.

                    Each React element is a JavaScript object that you can store in a variable or pass around in your program.

                    The ShoppingList component above only renders built-in DOM components like and .

                    But you can compose and render custom React components too.

                    For example, we can now refer to the whole shopping list by writing ShoppingList.

                    Each React component is encapsulated and can operate independently;
                    this allows you to build complex UIs from simple components.

                    Inspecting the Starter Code

                    If you’re going to work on the tutorial in your browser, open this code in a new tab: Starter Code.

                    If you’re going to work on the tutorial locally, instead open src/index.js in your project folder (you have already touched this file during the setup).

                    This Starter Code is the base of what we’re building. We’ve provided the CSS styling so that you only need to focus on learning React and programming the tic-tac-toe game.

                    By inspecting the code, you’ll notice that we have three React components:

                    Square
                    Board
                    Game
                    The Square component renders a single and the Board renders 9 squares.

                    The Game component renders a board with placeholder values which we’ll modify later.

                    There are currently no interactive components.

                    Passing Data Through Props
                    To get our feet wet, let’s try passing some data from our Board component to our Square component.

                    We strongly recommend typing code by hand as you’re working through the tutorial and not using copy/paste.

                    This will help you develop muscle memory and a stronger understanding.

                    In Board’s renderSquare method, change the code to pass a prop called value to the Square:
                </p>

                <p>What Are We Building?
                    In this tutorial, we’ll show how to build an interactive tic-tac-toe game with React.

                    You can see what we’ll be building here: Final Result.

                    If the code doesn’t make sense to you, or if you are unfamiliar with the code’s syntax, don’t worry!

                    The goal of this tutorial is to help you understand React and its syntax.

                    We recommend that you check out the tic-tac-toe game before continuing with the tutorial.

                    One of the features that you’ll notice is that there is a numbered list to the right of the game’s board.

                    This list gives you a history of all of the moves that have occurred in the game, and it is updated as the game progresses.

                    You can close the tic-tac-toe game once you’re familiar with it. We’ll be starting from a simpler template in this tutorial.

                    Our next step is to set you up so that you can start building the game.

                    Prerequisites
                    We’ll assume that you have some familiarity with HTML and JavaScript,
                    but you should be able to follow along even if you’re coming from a different programming language.

                    We’ll also assume that you’re familiar with programming concepts like functions, objects, arrays, and to a lesser extent, classes.

                    If you need to review JavaScript, we recommend reading this guide.

                    Note that we’re also using some features from ES6 — a recent version of JavaScript. In this tutorial, we’re using arrow functions, classes, let, and const statements.

                    You can use the Babel REPL to check what ES6 code compiles to.

                    Setup for the Tutorial
                    There are two ways to complete this tutorial:
                    you can either write the code in your browser, or you can set up a local development environment on your computer.

                    Setup Option 1: Write Code in the Browser
                    This is the quickest way to get started!

                    First, open this Starter Code in a new tab.

                    The new tab should display an empty tic-tac-toe game board and React code. We will be editing the React code in this tutorial.

                    You can now skip the second setup option, and go to the Overview section to get an overview of React.

                    Setup Option 2: Local Development Environment
                    This is completely optional and not required for this tutorial!


                    Optional: Instructions for following along locally using your preferred text editor
                    Help, I’m Stuck!
                    If you get stuck, check out the community support resources.

                    In particular, Reactiflux Chat is a great way to get help quickly.

                    If you don’t receive an answer, or if you remain stuck,
                    please file an issue, and we’ll help you out.

                    Overview
                    Now that you’re set up, let’s get an overview of React!

                    What Is React?
                    React is a declarative, efficient, and flexible JavaScript library for building user interfaces.

                    It lets you compose complex UIs from small and isolated pieces of code called “components”.

                    React has a few different kinds of components, but we’ll start with React.Component subclasses:

                    We’ll get to the funny XML-like tags soon. We use components to tell React what we want to see on the screen.

                    When our data changes, React will efficiently update and re-render our components.

                    Here, ShoppingList is a React component class, or React component type. A component takes in parameters,
                    called props (short for “properties”), and returns a hierarchy of views to display via the render method.

                    The render method returns a description of what you want to see on the screen.

                    React takes the description and displays the result.

                    In particular, render returns a React element, which is a lightweight description of what to render.

                    Most React developers use a special syntax called “JSX” which makes these structures easier to write.

                    The div syntax is transformed at build time to React.createElement('div').

                    The example above is equivalent to:

                    See full expanded version.

                    If you’re curious, createElement() is described in more detail in the API reference,
                    but we won’t be using it in this tutorial.

                    Instead, we will keep using JSX.

                    JSX comes with the full power of JavaScript. You can put any JavaScript expressions within braces inside JSX.

                    Each React element is a JavaScript object that you can store in a variable or pass around in your program.

                    The ShoppingList component above only renders built-in DOM components like and .

                    But you can compose and render custom React components too.

                    For example, we can now refer to the whole shopping list by writing ShoppingList.

                    Each React component is encapsulated and can operate independently;
                    this allows you to build complex UIs from simple components.

                    Inspecting the Starter Code

                    If you’re going to work on the tutorial in your browser, open this code in a new tab: Starter Code.

                    If you’re going to work on the tutorial locally, instead open src/index.js in your project folder (you have already touched this file during the setup).

                    This Starter Code is the base of what we’re building. We’ve provided the CSS styling so that you only need to focus on learning React and programming the tic-tac-toe game.

                    By inspecting the code, you’ll notice that we have three React components:

                    Square
                    Board
                    Game
                    The Square component renders a single and the Board renders 9 squares.

                    The Game component renders a board with placeholder values which we’ll modify later.

                    There are currently no interactive components.

                    Passing Data Through Props
                    To get our feet wet, let’s try passing some data from our Board component to our Square component.

                    We strongly recommend typing code by hand as you’re working through the tutorial and not using copy/paste.

                    This will help you develop muscle memory and a stronger understanding.

                    In Board’s renderSquare method, change the code to pass a prop called value to the Square:
                </p>

                <p>What Are We Building?
                    In this tutorial, we’ll show how to build an interactive tic-tac-toe game with React.

                    You can see what we’ll be building here: Final Result.

                    If the code doesn’t make sense to you, or if you are unfamiliar with the code’s syntax, don’t worry!

                    The goal of this tutorial is to help you understand React and its syntax.

                    We recommend that you check out the tic-tac-toe game before continuing with the tutorial.

                    One of the features that you’ll notice is that there is a numbered list to the right of the game’s board.

                    This list gives you a history of all of the moves that have occurred in the game, and it is updated as the game progresses.

                    You can close the tic-tac-toe game once you’re familiar with it. We’ll be starting from a simpler template in this tutorial.

                    Our next step is to set you up so that you can start building the game.

                    Prerequisites
                    We’ll assume that you have some familiarity with HTML and JavaScript,
                    but you should be able to follow along even if you’re coming from a different programming language.

                    We’ll also assume that you’re familiar with programming concepts like functions, objects, arrays, and to a lesser extent, classes.

                    If you need to review JavaScript, we recommend reading this guide.

                    Note that we’re also using some features from ES6 — a recent version of JavaScript. In this tutorial, we’re using arrow functions, classes, let, and const statements.

                    You can use the Babel REPL to check what ES6 code compiles to.

                    Setup for the Tutorial
                    There are two ways to complete this tutorial:
                    you can either write the code in your browser, or you can set up a local development environment on your computer.

                    Setup Option 1: Write Code in the Browser
                    This is the quickest way to get started!

                    First, open this Starter Code in a new tab.

                    The new tab should display an empty tic-tac-toe game board and React code. We will be editing the React code in this tutorial.

                    You can now skip the second setup option, and go to the Overview section to get an overview of React.

                    Setup Option 2: Local Development Environment
                    This is completely optional and not required for this tutorial!


                    Optional: Instructions for following along locally using your preferred text editor
                    Help, I’m Stuck!
                    If you get stuck, check out the community support resources.

                    In particular, Reactiflux Chat is a great way to get help quickly.

                    If you don’t receive an answer, or if you remain stuck,
                    please file an issue, and we’ll help you out.

                    Overview
                    Now that you’re set up, let’s get an overview of React!

                    What Is React?
                    React is a declarative, efficient, and flexible JavaScript library for building user interfaces.

                    It lets you compose complex UIs from small and isolated pieces of code called “components”.

                    React has a few different kinds of components, but we’ll start with React.Component subclasses:

                    We’ll get to the funny XML-like tags soon. We use components to tell React what we want to see on the screen.

                    When our data changes, React will efficiently update and re-render our components.

                    Here, ShoppingList is a React component class, or React component type. A component takes in parameters,
                    called props (short for “properties”), and returns a hierarchy of views to display via the render method.

                    The render method returns a description of what you want to see on the screen.

                    React takes the description and displays the result.

                    In particular, render returns a React element, which is a lightweight description of what to render.

                    Most React developers use a special syntax called “JSX” which makes these structures easier to write.

                    The div syntax is transformed at build time to React.createElement('div').

                    The example above is equivalent to:

                    See full expanded version.

                    If you’re curious, createElement() is described in more detail in the API reference,
                    but we won’t be using it in this tutorial.

                    Instead, we will keep using JSX.

                    JSX comes with the full power of JavaScript. You can put any JavaScript expressions within braces inside JSX.

                    Each React element is a JavaScript object that you can store in a variable or pass around in your program.

                    The ShoppingList component above only renders built-in DOM components like and .

                    But you can compose and render custom React components too.

                    For example, we can now refer to the whole shopping list by writing ShoppingList.

                    Each React component is encapsulated and can operate independently;
                    this allows you to build complex UIs from simple components.

                    Inspecting the Starter Code

                    If you’re going to work on the tutorial in your browser, open this code in a new tab: Starter Code.

                    If you’re going to work on the tutorial locally, instead open src/index.js in your project folder (you have already touched this file during the setup).

                    This Starter Code is the base of what we’re building. We’ve provided the CSS styling so that you only need to focus on learning React and programming the tic-tac-toe game.

                    By inspecting the code, you’ll notice that we have three React components:

                    Square
                    Board
                    Game
                    The Square component renders a single and the Board renders 9 squares.

                    The Game component renders a board with placeholder values which we’ll modify later.

                    There are currently no interactive components.

                    Passing Data Through Props
                    To get our feet wet, let’s try passing some data from our Board component to our Square component.

                    We strongly recommend typing code by hand as you’re working through the tutorial and not using copy/paste.

                    This will help you develop muscle memory and a stronger understanding.

                    In Board’s renderSquare method, change the code to pass a prop called value to the Square:
                </p>

                <p>What Are We Building?
                    In this tutorial, we’ll show how to build an interactive tic-tac-toe game with React.

                    You can see what we’ll be building here: Final Result.

                    If the code doesn’t make sense to you, or if you are unfamiliar with the code’s syntax, don’t worry!

                    The goal of this tutorial is to help you understand React and its syntax.

                    We recommend that you check out the tic-tac-toe game before continuing with the tutorial.

                    One of the features that you’ll notice is that there is a numbered list to the right of the game’s board.

                    This list gives you a history of all of the moves that have occurred in the game, and it is updated as the game progresses.

                    You can close the tic-tac-toe game once you’re familiar with it. We’ll be starting from a simpler template in this tutorial.

                    Our next step is to set you up so that you can start building the game.

                    Prerequisites
                    We’ll assume that you have some familiarity with HTML and JavaScript,
                    but you should be able to follow along even if you’re coming from a different programming language.

                    We’ll also assume that you’re familiar with programming concepts like functions, objects, arrays, and to a lesser extent, classes.

                    If you need to review JavaScript, we recommend reading this guide.

                    Note that we’re also using some features from ES6 — a recent version of JavaScript. In this tutorial, we’re using arrow functions, classes, let, and const statements.

                    You can use the Babel REPL to check what ES6 code compiles to.

                    Setup for the Tutorial
                    There are two ways to complete this tutorial:
                    you can either write the code in your browser, or you can set up a local development environment on your computer.

                    Setup Option 1: Write Code in the Browser
                    This is the quickest way to get started!

                    First, open this Starter Code in a new tab.

                    The new tab should display an empty tic-tac-toe game board and React code. We will be editing the React code in this tutorial.

                    You can now skip the second setup option, and go to the Overview section to get an overview of React.

                    Setup Option 2: Local Development Environment
                    This is completely optional and not required for this tutorial!


                    Optional: Instructions for following along locally using your preferred text editor
                    Help, I’m Stuck!
                    If you get stuck, check out the community support resources.

                    In particular, Reactiflux Chat is a great way to get help quickly.

                    If you don’t receive an answer, or if you remain stuck,
                    please file an issue, and we’ll help you out.

                    Overview
                    Now that you’re set up, let’s get an overview of React!

                    What Is React?
                    React is a declarative, efficient, and flexible JavaScript library for building user interfaces.

                    It lets you compose complex UIs from small and isolated pieces of code called “components”.

                    React has a few different kinds of components, but we’ll start with React.Component subclasses:

                    We’ll get to the funny XML-like tags soon. We use components to tell React what we want to see on the screen.

                    When our data changes, React will efficiently update and re-render our components.

                    Here, ShoppingList is a React component class, or React component type. A component takes in parameters,
                    called props (short for “properties”), and returns a hierarchy of views to display via the render method.

                    The render method returns a description of what you want to see on the screen.

                    React takes the description and displays the result.

                    In particular, render returns a React element, which is a lightweight description of what to render.

                    Most React developers use a special syntax called “JSX” which makes these structures easier to write.

                    The div syntax is transformed at build time to React.createElement('div').

                    The example above is equivalent to:

                    See full expanded version.

                    If you’re curious, createElement() is described in more detail in the API reference,
                    but we won’t be using it in this tutorial.

                    Instead, we will keep using JSX.

                    JSX comes with the full power of JavaScript. You can put any JavaScript expressions within braces inside JSX.

                    Each React element is a JavaScript object that you can store in a variable or pass around in your program.

                    The ShoppingList component above only renders built-in DOM components like and .

                    But you can compose and render custom React components too.

                    For example, we can now refer to the whole shopping list by writing ShoppingList.

                    Each React component is encapsulated and can operate independently;
                    this allows you to build complex UIs from simple components.

                    Inspecting the Starter Code

                    If you’re going to work on the tutorial in your browser, open this code in a new tab: Starter Code.

                    If you’re going to work on the tutorial locally, instead open src/index.js in your project folder (you have already touched this file during the setup).

                    This Starter Code is the base of what we’re building. We’ve provided the CSS styling so that you only need to focus on learning React and programming the tic-tac-toe game.

                    By inspecting the code, you’ll notice that we have three React components:

                    Square
                    Board
                    Game
                    The Square component renders a single and the Board renders 9 squares.

                    The Game component renders a board with placeholder values which we’ll modify later.

                    There are currently no interactive components.

                    Passing Data Through Props
                    To get our feet wet, let’s try passing some data from our Board component to our Square component.

                    We strongly recommend typing code by hand as you’re working through the tutorial and not using copy/paste.

                    This will help you develop muscle memory and a stronger understanding.

                    In Board’s renderSquare method, change the code to pass a prop called value to the Square:
                </p>

                <p>What Are We Building?
                    In this tutorial, we’ll show how to build an interactive tic-tac-toe game with React.

                    You can see what we’ll be building here: Final Result.

                    If the code doesn’t make sense to you, or if you are unfamiliar with the code’s syntax, don’t worry!

                    The goal of this tutorial is to help you understand React and its syntax.

                    We recommend that you check out the tic-tac-toe game before continuing with the tutorial.

                    One of the features that you’ll notice is that there is a numbered list to the right of the game’s board.

                    This list gives you a history of all of the moves that have occurred in the game, and it is updated as the game progresses.

                    You can close the tic-tac-toe game once you’re familiar with it. We’ll be starting from a simpler template in this tutorial.

                    Our next step is to set you up so that you can start building the game.

                    Prerequisites
                    We’ll assume that you have some familiarity with HTML and JavaScript,
                    but you should be able to follow along even if you’re coming from a different programming language.

                    We’ll also assume that you’re familiar with programming concepts like functions, objects, arrays, and to a lesser extent, classes.

                    If you need to review JavaScript, we recommend reading this guide.

                    Note that we’re also using some features from ES6 — a recent version of JavaScript. In this tutorial, we’re using arrow functions, classes, let, and const statements.

                    You can use the Babel REPL to check what ES6 code compiles to.

                    Setup for the Tutorial
                    There are two ways to complete this tutorial:
                    you can either write the code in your browser, or you can set up a local development environment on your computer.

                    Setup Option 1: Write Code in the Browser
                    This is the quickest way to get started!

                    First, open this Starter Code in a new tab.

                    The new tab should display an empty tic-tac-toe game board and React code. We will be editing the React code in this tutorial.

                    You can now skip the second setup option, and go to the Overview section to get an overview of React.

                    Setup Option 2: Local Development Environment
                    This is completely optional and not required for this tutorial!


                    Optional: Instructions for following along locally using your preferred text editor
                    Help, I’m Stuck!
                    If you get stuck, check out the community support resources.

                    In particular, Reactiflux Chat is a great way to get help quickly.

                    If you don’t receive an answer, or if you remain stuck,
                    please file an issue, and we’ll help you out.

                    Overview
                    Now that you’re set up, let’s get an overview of React!

                    What Is React?
                    React is a declarative, efficient, and flexible JavaScript library for building user interfaces.

                    It lets you compose complex UIs from small and isolated pieces of code called “components”.

                    React has a few different kinds of components, but we’ll start with React.Component subclasses:

                    We’ll get to the funny XML-like tags soon. We use components to tell React what we want to see on the screen.

                    When our data changes, React will efficiently update and re-render our components.

                    Here, ShoppingList is a React component class, or React component type. A component takes in parameters,
                    called props (short for “properties”), and returns a hierarchy of views to display via the render method.

                    The render method returns a description of what you want to see on the screen.

                    React takes the description and displays the result.

                    In particular, render returns a React element, which is a lightweight description of what to render.

                    Most React developers use a special syntax called “JSX” which makes these structures easier to write.

                    The div syntax is transformed at build time to React.createElement('div').

                    The example above is equivalent to:

                    See full expanded version.

                    If you’re curious, createElement() is described in more detail in the API reference,
                    but we won’t be using it in this tutorial.

                    Instead, we will keep using JSX.

                    JSX comes with the full power of JavaScript. You can put any JavaScript expressions within braces inside JSX.

                    Each React element is a JavaScript object that you can store in a variable or pass around in your program.

                    The ShoppingList component above only renders built-in DOM components like and .

                    But you can compose and render custom React components too.

                    For example, we can now refer to the whole shopping list by writing ShoppingList.

                    Each React component is encapsulated and can operate independently;
                    this allows you to build complex UIs from simple components.

                    Inspecting the Starter Code

                    If you’re going to work on the tutorial in your browser, open this code in a new tab: Starter Code.

                    If you’re going to work on the tutorial locally, instead open src/index.js in your project folder (you have already touched this file during the setup).

                    This Starter Code is the base of what we’re building. We’ve provided the CSS styling so that you only need to focus on learning React and programming the tic-tac-toe game.

                    By inspecting the code, you’ll notice that we have three React components:

                    Square
                    Board
                    Game
                    The Square component renders a single and the Board renders 9 squares.

                    The Game component renders a board with placeholder values which we’ll modify later.

                    There are currently no interactive components.

                    Passing Data Through Props
                    To get our feet wet, let’s try passing some data from our Board component to our Square component.

                    We strongly recommend typing code by hand as you’re working through the tutorial and not using copy/paste.

                    This will help you develop muscle memory and a stronger understanding.

                    In Board’s renderSquare method, change the code to pass a prop called value to the Square:
                </p>

                <p>What Are We Building?
                    In this tutorial, we’ll show how to build an interactive tic-tac-toe game with React.

                    You can see what we’ll be building here: Final Result.

                    If the code doesn’t make sense to you, or if you are unfamiliar with the code’s syntax, don’t worry!

                    The goal of this tutorial is to help you understand React and its syntax.

                    We recommend that you check out the tic-tac-toe game before continuing with the tutorial.

                    One of the features that you’ll notice is that there is a numbered list to the right of the game’s board.

                    This list gives you a history of all of the moves that have occurred in the game, and it is updated as the game progresses.

                    You can close the tic-tac-toe game once you’re familiar with it. We’ll be starting from a simpler template in this tutorial.

                    Our next step is to set you up so that you can start building the game.

                    Prerequisites
                    We’ll assume that you have some familiarity with HTML and JavaScript,
                    but you should be able to follow along even if you’re coming from a different programming language.

                    We’ll also assume that you’re familiar with programming concepts like functions, objects, arrays, and to a lesser extent, classes.

                    If you need to review JavaScript, we recommend reading this guide.

                    Note that we’re also using some features from ES6 — a recent version of JavaScript. In this tutorial, we’re using arrow functions, classes, let, and const statements.

                    You can use the Babel REPL to check what ES6 code compiles to.

                    Setup for the Tutorial
                    There are two ways to complete this tutorial:
                    you can either write the code in your browser, or you can set up a local development environment on your computer.

                    Setup Option 1: Write Code in the Browser
                    This is the quickest way to get started!

                    First, open this Starter Code in a new tab.

                    The new tab should display an empty tic-tac-toe game board and React code. We will be editing the React code in this tutorial.

                    You can now skip the second setup option, and go to the Overview section to get an overview of React.

                    Setup Option 2: Local Development Environment
                    This is completely optional and not required for this tutorial!


                    Optional: Instructions for following along locally using your preferred text editor
                    Help, I’m Stuck!
                    If you get stuck, check out the community support resources.

                    In particular, Reactiflux Chat is a great way to get help quickly.

                    If you don’t receive an answer, or if you remain stuck,
                    please file an issue, and we’ll help you out.

                    Overview
                    Now that you’re set up, let’s get an overview of React!

                    What Is React?
                    React is a declarative, efficient, and flexible JavaScript library for building user interfaces.

                    It lets you compose complex UIs from small and isolated pieces of code called “components”.

                    React has a few different kinds of components, but we’ll start with React.Component subclasses:

                    We’ll get to the funny XML-like tags soon. We use components to tell React what we want to see on the screen.

                    When our data changes, React will efficiently update and re-render our components.

                    Here, ShoppingList is a React component class, or React component type. A component takes in parameters,
                    called props (short for “properties”), and returns a hierarchy of views to display via the render method.

                    The render method returns a description of what you want to see on the screen.

                    React takes the description and displays the result.

                    In particular, render returns a React element, which is a lightweight description of what to render.

                    Most React developers use a special syntax called “JSX” which makes these structures easier to write.

                    The div syntax is transformed at build time to React.createElement('div').

                    The example above is equivalent to:

                    See full expanded version.

                    If you’re curious, createElement() is described in more detail in the API reference,
                    but we won’t be using it in this tutorial.

                    Instead, we will keep using JSX.

                    JSX comes with the full power of JavaScript. You can put any JavaScript expressions within braces inside JSX.

                    Each React element is a JavaScript object that you can store in a variable or pass around in your program.

                    The ShoppingList component above only renders built-in DOM components like and .

                    But you can compose and render custom React components too.

                    For example, we can now refer to the whole shopping list by writing ShoppingList.

                    Each React component is encapsulated and can operate independently;
                    this allows you to build complex UIs from simple components.

                    Inspecting the Starter Code

                    If you’re going to work on the tutorial in your browser, open this code in a new tab: Starter Code.

                    If you’re going to work on the tutorial locally, instead open src/index.js in your project folder (you have already touched this file during the setup).

                    This Starter Code is the base of what we’re building. We’ve provided the CSS styling so that you only need to focus on learning React and programming the tic-tac-toe game.

                    By inspecting the code, you’ll notice that we have three React components:

                    Square
                    Board
                    Game
                    The Square component renders a single and the Board renders 9 squares.

                    The Game component renders a board with placeholder values which we’ll modify later.

                    There are currently no interactive components.

                    Passing Data Through Props
                    To get our feet wet, let’s try passing some data from our Board component to our Square component.

                    We strongly recommend typing code by hand as you’re working through the tutorial and not using copy/paste.

                    This will help you develop muscle memory and a stronger understanding.

                    In Board’s renderSquare method, change the code to pass a prop called value to the Square:
                </p>

                <p>What Are We Building?
                    In this tutorial, we’ll show how to build an interactive tic-tac-toe game with React.

                    You can see what we’ll be building here: Final Result.

                    If the code doesn’t make sense to you, or if you are unfamiliar with the code’s syntax, don’t worry!

                    The goal of this tutorial is to help you understand React and its syntax.

                    We recommend that you check out the tic-tac-toe game before continuing with the tutorial.

                    One of the features that you’ll notice is that there is a numbered list to the right of the game’s board.

                    This list gives you a history of all of the moves that have occurred in the game, and it is updated as the game progresses.

                    You can close the tic-tac-toe game once you’re familiar with it. We’ll be starting from a simpler template in this tutorial.

                    Our next step is to set you up so that you can start building the game.

                    Prerequisites
                    We’ll assume that you have some familiarity with HTML and JavaScript,
                    but you should be able to follow along even if you’re coming from a different programming language.

                    We’ll also assume that you’re familiar with programming concepts like functions, objects, arrays, and to a lesser extent, classes.

                    If you need to review JavaScript, we recommend reading this guide.

                    Note that we’re also using some features from ES6 — a recent version of JavaScript. In this tutorial, we’re using arrow functions, classes, let, and const statements.

                    You can use the Babel REPL to check what ES6 code compiles to.

                    Setup for the Tutorial
                    There are two ways to complete this tutorial:
                    you can either write the code in your browser, or you can set up a local development environment on your computer.

                    Setup Option 1: Write Code in the Browser
                    This is the quickest way to get started!

                    First, open this Starter Code in a new tab.

                    The new tab should display an empty tic-tac-toe game board and React code. We will be editing the React code in this tutorial.

                    You can now skip the second setup option, and go to the Overview section to get an overview of React.

                    Setup Option 2: Local Development Environment
                    This is completely optional and not required for this tutorial!


                    Optional: Instructions for following along locally using your preferred text editor
                    Help, I’m Stuck!
                    If you get stuck, check out the community support resources.

                    In particular, Reactiflux Chat is a great way to get help quickly.

                    If you don’t receive an answer, or if you remain stuck,
                    please file an issue, and we’ll help you out.

                    Overview
                    Now that you’re set up, let’s get an overview of React!

                    What Is React?
                    React is a declarative, efficient, and flexible JavaScript library for building user interfaces.

                    It lets you compose complex UIs from small and isolated pieces of code called “components”.

                    React has a few different kinds of components, but we’ll start with React.Component subclasses:

                    We’ll get to the funny XML-like tags soon. We use components to tell React what we want to see on the screen.

                    When our data changes, React will efficiently update and re-render our components.

                    Here, ShoppingList is a React component class, or React component type. A component takes in parameters,
                    called props (short for “properties”), and returns a hierarchy of views to display via the render method.

                    The render method returns a description of what you want to see on the screen.

                    React takes the description and displays the result.

                    In particular, render returns a React element, which is a lightweight description of what to render.

                    Most React developers use a special syntax called “JSX” which makes these structures easier to write.

                    The div syntax is transformed at build time to React.createElement('div').

                    The example above is equivalent to:

                    See full expanded version.

                    If you’re curious, createElement() is described in more detail in the API reference,
                    but we won’t be using it in this tutorial.

                    Instead, we will keep using JSX.

                    JSX comes with the full power of JavaScript. You can put any JavaScript expressions within braces inside JSX.

                    Each React element is a JavaScript object that you can store in a variable or pass around in your program.

                    The ShoppingList component above only renders built-in DOM components like and .

                    But you can compose and render custom React components too.

                    For example, we can now refer to the whole shopping list by writing ShoppingList.

                    Each React component is encapsulated and can operate independently;
                    this allows you to build complex UIs from simple components.

                    Inspecting the Starter Code

                    If you’re going to work on the tutorial in your browser, open this code in a new tab: Starter Code.

                    If you’re going to work on the tutorial locally, instead open src/index.js in your project folder (you have already touched this file during the setup).

                    This Starter Code is the base of what we’re building. We’ve provided the CSS styling so that you only need to focus on learning React and programming the tic-tac-toe game.

                    By inspecting the code, you’ll notice that we have three React components:

                    Square
                    Board
                    Game
                    The Square component renders a single and the Board renders 9 squares.

                    The Game component renders a board with placeholder values which we’ll modify later.

                    There are currently no interactive components.

                    Passing Data Through Props
                    To get our feet wet, let’s try passing some data from our Board component to our Square component.

                    We strongly recommend typing code by hand as you’re working through the tutorial and not using copy/paste.

                    This will help you develop muscle memory and a stronger understanding.

                    In Board’s renderSquare method, change the code to pass a prop called value to the Square:
                </p>

                <p>What Are We Building?
                    In this tutorial, we’ll show how to build an interactive tic-tac-toe game with React.

                    You can see what we’ll be building here: Final Result.

                    If the code doesn’t make sense to you, or if you are unfamiliar with the code’s syntax, don’t worry!

                    The goal of this tutorial is to help you understand React and its syntax.

                    We recommend that you check out the tic-tac-toe game before continuing with the tutorial.

                    One of the features that you’ll notice is that there is a numbered list to the right of the game’s board.

                    This list gives you a history of all of the moves that have occurred in the game, and it is updated as the game progresses.

                    You can close the tic-tac-toe game once you’re familiar with it. We’ll be starting from a simpler template in this tutorial.

                    Our next step is to set you up so that you can start building the game.

                    Prerequisites
                    We’ll assume that you have some familiarity with HTML and JavaScript,
                    but you should be able to follow along even if you’re coming from a different programming language.

                    We’ll also assume that you’re familiar with programming concepts like functions, objects, arrays, and to a lesser extent, classes.

                    If you need to review JavaScript, we recommend reading this guide.

                    Note that we’re also using some features from ES6 — a recent version of JavaScript. In this tutorial, we’re using arrow functions, classes, let, and const statements.

                    You can use the Babel REPL to check what ES6 code compiles to.

                    Setup for the Tutorial
                    There are two ways to complete this tutorial:
                    you can either write the code in your browser, or you can set up a local development environment on your computer.

                    Setup Option 1: Write Code in the Browser
                    This is the quickest way to get started!

                    First, open this Starter Code in a new tab.

                    The new tab should display an empty tic-tac-toe game board and React code. We will be editing the React code in this tutorial.

                    You can now skip the second setup option, and go to the Overview section to get an overview of React.

                    Setup Option 2: Local Development Environment
                    This is completely optional and not required for this tutorial!


                    Optional: Instructions for following along locally using your preferred text editor
                    Help, I’m Stuck!
                    If you get stuck, check out the community support resources.

                    In particular, Reactiflux Chat is a great way to get help quickly.

                    If you don’t receive an answer, or if you remain stuck,
                    please file an issue, and we’ll help you out.

                    Overview
                    Now that you’re set up, let’s get an overview of React!

                    What Is React?
                    React is a declarative, efficient, and flexible JavaScript library for building user interfaces.

                    It lets you compose complex UIs from small and isolated pieces of code called “components”.

                    React has a few different kinds of components, but we’ll start with React.Component subclasses:

                    We’ll get to the funny XML-like tags soon. We use components to tell React what we want to see on the screen.

                    When our data changes, React will efficiently update and re-render our components.

                    Here, ShoppingList is a React component class, or React component type. A component takes in parameters,
                    called props (short for “properties”), and returns a hierarchy of views to display via the render method.

                    The render method returns a description of what you want to see on the screen.

                    React takes the description and displays the result.

                    In particular, render returns a React element, which is a lightweight description of what to render.

                    Most React developers use a special syntax called “JSX” which makes these structures easier to write.

                    The div syntax is transformed at build time to React.createElement('div').

                    The example above is equivalent to:

                    See full expanded version.

                    If you’re curious, createElement() is described in more detail in the API reference,
                    but we won’t be using it in this tutorial.

                    Instead, we will keep using JSX.

                    JSX comes with the full power of JavaScript. You can put any JavaScript expressions within braces inside JSX.

                    Each React element is a JavaScript object that you can store in a variable or pass around in your program.

                    The ShoppingList component above only renders built-in DOM components like and .

                    But you can compose and render custom React components too.

                    For example, we can now refer to the whole shopping list by writing ShoppingList.

                    Each React component is encapsulated and can operate independently;
                    this allows you to build complex UIs from simple components.

                    Inspecting the Starter Code

                    If you’re going to work on the tutorial in your browser, open this code in a new tab: Starter Code.

                    If you’re going to work on the tutorial locally, instead open src/index.js in your project folder (you have already touched this file during the setup).

                    This Starter Code is the base of what we’re building. We’ve provided the CSS styling so that you only need to focus on learning React and programming the tic-tac-toe game.

                    By inspecting the code, you’ll notice that we have three React components:

                    Square
                    Board
                    Game
                    The Square component renders a single and the Board renders 9 squares.

                    The Game component renders a board with placeholder values which we’ll modify later.

                    There are currently no interactive components.

                    Passing Data Through Props
                    To get our feet wet, let’s try passing some data from our Board component to our Square component.

                    We strongly recommend typing code by hand as you’re working through the tutorial and not using copy/paste.

                    This will help you develop muscle memory and a stronger understanding.

                    In Board’s renderSquare method, change the code to pass a prop called value to the Square:
                </p>

                <p>What Are We Building?
                    In this tutorial, we’ll show how to build an interactive tic-tac-toe game with React.

                    You can see what we’ll be building here: Final Result.

                    If the code doesn’t make sense to you, or if you are unfamiliar with the code’s syntax, don’t worry!

                    The goal of this tutorial is to help you understand React and its syntax.

                    We recommend that you check out the tic-tac-toe game before continuing with the tutorial.

                    One of the features that you’ll notice is that there is a numbered list to the right of the game’s board.

                    This list gives you a history of all of the moves that have occurred in the game, and it is updated as the game progresses.

                    You can close the tic-tac-toe game once you’re familiar with it. We’ll be starting from a simpler template in this tutorial.

                    Our next step is to set you up so that you can start building the game.

                    Prerequisites
                    We’ll assume that you have some familiarity with HTML and JavaScript,
                    but you should be able to follow along even if you’re coming from a different programming language.

                    We’ll also assume that you’re familiar with programming concepts like functions, objects, arrays, and to a lesser extent, classes.

                    If you need to review JavaScript, we recommend reading this guide.

                    Note that we’re also using some features from ES6 — a recent version of JavaScript. In this tutorial, we’re using arrow functions, classes, let, and const statements.

                    You can use the Babel REPL to check what ES6 code compiles to.

                    Setup for the Tutorial
                    There are two ways to complete this tutorial:
                    you can either write the code in your browser, or you can set up a local development environment on your computer.

                    Setup Option 1: Write Code in the Browser
                    This is the quickest way to get started!

                    First, open this Starter Code in a new tab.

                    The new tab should display an empty tic-tac-toe game board and React code. We will be editing the React code in this tutorial.

                    You can now skip the second setup option, and go to the Overview section to get an overview of React.

                    Setup Option 2: Local Development Environment
                    This is completely optional and not required for this tutorial!


                    Optional: Instructions for following along locally using your preferred text editor
                    Help, I’m Stuck!
                    If you get stuck, check out the community support resources.

                    In particular, Reactiflux Chat is a great way to get help quickly.

                    If you don’t receive an answer, or if you remain stuck,
                    please file an issue, and we’ll help you out.

                    Overview
                    Now that you’re set up, let’s get an overview of React!

                    What Is React?
                    React is a declarative, efficient, and flexible JavaScript library for building user interfaces.

                    It lets you compose complex UIs from small and isolated pieces of code called “components”.

                    React has a few different kinds of components, but we’ll start with React.Component subclasses:

                    We’ll get to the funny XML-like tags soon. We use components to tell React what we want to see on the screen.

                    When our data changes, React will efficiently update and re-render our components.

                    Here, ShoppingList is a React component class, or React component type. A component takes in parameters,
                    called props (short for “properties”), and returns a hierarchy of views to display via the render method.

                    The render method returns a description of what you want to see on the screen.

                    React takes the description and displays the result.

                    In particular, render returns a React element, which is a lightweight description of what to render.

                    Most React developers use a special syntax called “JSX” which makes these structures easier to write.

                    The div syntax is transformed at build time to React.createElement('div').

                    The example above is equivalent to:

                    See full expanded version.

                    If you’re curious, createElement() is described in more detail in the API reference,
                    but we won’t be using it in this tutorial.

                    Instead, we will keep using JSX.

                    JSX comes with the full power of JavaScript. You can put any JavaScript expressions within braces inside JSX.

                    Each React element is a JavaScript object that you can store in a variable or pass around in your program.

                    The ShoppingList component above only renders built-in DOM components like and .

                    But you can compose and render custom React components too.

                    For example, we can now refer to the whole shopping list by writing ShoppingList.

                    Each React component is encapsulated and can operate independently;
                    this allows you to build complex UIs from simple components.

                    Inspecting the Starter Code

                    If you’re going to work on the tutorial in your browser, open this code in a new tab: Starter Code.

                    If you’re going to work on the tutorial locally, instead open src/index.js in your project folder (you have already touched this file during the setup).

                    This Starter Code is the base of what we’re building. We’ve provided the CSS styling so that you only need to focus on learning React and programming the tic-tac-toe game.

                    By inspecting the code, you’ll notice that we have three React components:

                    Square
                    Board
                    Game
                    The Square component renders a single and the Board renders 9 squares.

                    The Game component renders a board with placeholder values which we’ll modify later.

                    There are currently no interactive components.

                    Passing Data Through Props
                    To get our feet wet, let’s try passing some data from our Board component to our Square component.

                    We strongly recommend typing code by hand as you’re working through the tutorial and not using copy/paste.

                    This will help you develop muscle memory and a stronger understanding.

                    In Board’s renderSquare method, change the code to pass a prop called value to the Square:
                </p>

                <p>What Are We Building?
                    In this tutorial, we’ll show how to build an interactive tic-tac-toe game with React.

                    You can see what we’ll be building here: Final Result.

                    If the code doesn’t make sense to you, or if you are unfamiliar with the code’s syntax, don’t worry!

                    The goal of this tutorial is to help you understand React and its syntax.

                    We recommend that you check out the tic-tac-toe game before continuing with the tutorial.

                    One of the features that you’ll notice is that there is a numbered list to the right of the game’s board.

                    This list gives you a history of all of the moves that have occurred in the game, and it is updated as the game progresses.

                    You can close the tic-tac-toe game once you’re familiar with it. We’ll be starting from a simpler template in this tutorial.

                    Our next step is to set you up so that you can start building the game.

                    Prerequisites
                    We’ll assume that you have some familiarity with HTML and JavaScript,
                    but you should be able to follow along even if you’re coming from a different programming language.

                    We’ll also assume that you’re familiar with programming concepts like functions, objects, arrays, and to a lesser extent, classes.

                    If you need to review JavaScript, we recommend reading this guide.

                    Note that we’re also using some features from ES6 — a recent version of JavaScript. In this tutorial, we’re using arrow functions, classes, let, and const statements.

                    You can use the Babel REPL to check what ES6 code compiles to.

                    Setup for the Tutorial
                    There are two ways to complete this tutorial:
                    you can either write the code in your browser, or you can set up a local development environment on your computer.

                    Setup Option 1: Write Code in the Browser
                    This is the quickest way to get started!

                    First, open this Starter Code in a new tab.

                    The new tab should display an empty tic-tac-toe game board and React code. We will be editing the React code in this tutorial.

                    You can now skip the second setup option, and go to the Overview section to get an overview of React.

                    Setup Option 2: Local Development Environment
                    This is completely optional and not required for this tutorial!


                    Optional: Instructions for following along locally using your preferred text editor
                    Help, I’m Stuck!
                    If you get stuck, check out the community support resources.

                    In particular, Reactiflux Chat is a great way to get help quickly.

                    If you don’t receive an answer, or if you remain stuck,
                    please file an issue, and we’ll help you out.

                    Overview
                    Now that you’re set up, let’s get an overview of React!

                    What Is React?
                    React is a declarative, efficient, and flexible JavaScript library for building user interfaces.

                    It lets you compose complex UIs from small and isolated pieces of code called “components”.

                    React has a few different kinds of components, but we’ll start with React.Component subclasses:

                    We’ll get to the funny XML-like tags soon. We use components to tell React what we want to see on the screen.

                    When our data changes, React will efficiently update and re-render our components.

                    Here, ShoppingList is a React component class, or React component type. A component takes in parameters,
                    called props (short for “properties”), and returns a hierarchy of views to display via the render method.

                    The render method returns a description of what you want to see on the screen.

                    React takes the description and displays the result.

                    In particular, render returns a React element, which is a lightweight description of what to render.

                    Most React developers use a special syntax called “JSX” which makes these structures easier to write.

                    The div syntax is transformed at build time to React.createElement('div').

                    The example above is equivalent to:

                    See full expanded version.

                    If you’re curious, createElement() is described in more detail in the API reference,
                    but we won’t be using it in this tutorial.

                    Instead, we will keep using JSX.

                    JSX comes with the full power of JavaScript. You can put any JavaScript expressions within braces inside JSX.

                    Each React element is a JavaScript object that you can store in a variable or pass around in your program.

                    The ShoppingList component above only renders built-in DOM components like and .

                    But you can compose and render custom React components too.

                    For example, we can now refer to the whole shopping list by writing ShoppingList.

                    Each React component is encapsulated and can operate independently;
                    this allows you to build complex UIs from simple components.

                    Inspecting the Starter Code

                    If you’re going to work on the tutorial in your browser, open this code in a new tab: Starter Code.

                    If you’re going to work on the tutorial locally, instead open src/index.js in your project folder (you have already touched this file during the setup).

                    This Starter Code is the base of what we’re building. We’ve provided the CSS styling so that you only need to focus on learning React and programming the tic-tac-toe game.

                    By inspecting the code, you’ll notice that we have three React components:

                    Square
                    Board
                    Game
                    The Square component renders a single and the Board renders 9 squares.

                    The Game component renders a board with placeholder values which we’ll modify later.

                    There are currently no interactive components.

                    Passing Data Through Props
                    To get our feet wet, let’s try passing some data from our Board component to our Square component.

                    We strongly recommend typing code by hand as you’re working through the tutorial and not using copy/paste.

                    This will help you develop muscle memory and a stronger understanding.

                    In Board’s renderSquare method, change the code to pass a prop called value to the Square:
                </p>

                <p>What Are We Building?
                    In this tutorial, we’ll show how to build an interactive tic-tac-toe game with React.

                    You can see what we’ll be building here: Final Result.

                    If the code doesn’t make sense to you, or if you are unfamiliar with the code’s syntax, don’t worry!

                    The goal of this tutorial is to help you understand React and its syntax.

                    We recommend that you check out the tic-tac-toe game before continuing with the tutorial.

                    One of the features that you’ll notice is that there is a numbered list to the right of the game’s board.

                    This list gives you a history of all of the moves that have occurred in the game, and it is updated as the game progresses.

                    You can close the tic-tac-toe game once you’re familiar with it. We’ll be starting from a simpler template in this tutorial.

                    Our next step is to set you up so that you can start building the game.

                    Prerequisites
                    We’ll assume that you have some familiarity with HTML and JavaScript,
                    but you should be able to follow along even if you’re coming from a different programming language.

                    We’ll also assume that you’re familiar with programming concepts like functions, objects, arrays, and to a lesser extent, classes.

                    If you need to review JavaScript, we recommend reading this guide.

                    Note that we’re also using some features from ES6 — a recent version of JavaScript. In this tutorial, we’re using arrow functions, classes, let, and const statements.

                    You can use the Babel REPL to check what ES6 code compiles to.

                    Setup for the Tutorial
                    There are two ways to complete this tutorial:
                    you can either write the code in your browser, or you can set up a local development environment on your computer.

                    Setup Option 1: Write Code in the Browser
                    This is the quickest way to get started!

                    First, open this Starter Code in a new tab.

                    The new tab should display an empty tic-tac-toe game board and React code. We will be editing the React code in this tutorial.

                    You can now skip the second setup option, and go to the Overview section to get an overview of React.

                    Setup Option 2: Local Development Environment
                    This is completely optional and not required for this tutorial!


                    Optional: Instructions for following along locally using your preferred text editor
                    Help, I’m Stuck!
                    If you get stuck, check out the community support resources.

                    In particular, Reactiflux Chat is a great way to get help quickly.

                    If you don’t receive an answer, or if you remain stuck,
                    please file an issue, and we’ll help you out.

                    Overview
                    Now that you’re set up, let’s get an overview of React!

                    What Is React?
                    React is a declarative, efficient, and flexible JavaScript library for building user interfaces.

                    It lets you compose complex UIs from small and isolated pieces of code called “components”.

                    React has a few different kinds of components, but we’ll start with React.Component subclasses:

                    We’ll get to the funny XML-like tags soon. We use components to tell React what we want to see on the screen.

                    When our data changes, React will efficiently update and re-render our components.

                    Here, ShoppingList is a React component class, or React component type. A component takes in parameters,
                    called props (short for “properties”), and returns a hierarchy of views to display via the render method.

                    The render method returns a description of what you want to see on the screen.

                    React takes the description and displays the result.

                    In particular, render returns a React element, which is a lightweight description of what to render.

                    Most React developers use a special syntax called “JSX” which makes these structures easier to write.

                    The div syntax is transformed at build time to React.createElement('div').

                    The example above is equivalent to:

                    See full expanded version.

                    If you’re curious, createElement() is described in more detail in the API reference,
                    but we won’t be using it in this tutorial.

                    Instead, we will keep using JSX.

                    JSX comes with the full power of JavaScript. You can put any JavaScript expressions within braces inside JSX.

                    Each React element is a JavaScript object that you can store in a variable or pass around in your program.

                    The ShoppingList component above only renders built-in DOM components like and .

                    But you can compose and render custom React components too.

                    For example, we can now refer to the whole shopping list by writing ShoppingList.

                    Each React component is encapsulated and can operate independently;
                    this allows you to build complex UIs from simple components.

                    Inspecting the Starter Code

                    If you’re going to work on the tutorial in your browser, open this code in a new tab: Starter Code.

                    If you’re going to work on the tutorial locally, instead open src/index.js in your project folder (you have already touched this file during the setup).

                    This Starter Code is the base of what we’re building. We’ve provided the CSS styling so that you only need to focus on learning React and programming the tic-tac-toe game.

                    By inspecting the code, you’ll notice that we have three React components:

                    Square
                    Board
                    Game
                    The Square component renders a single and the Board renders 9 squares.

                    The Game component renders a board with placeholder values which we’ll modify later.

                    There are currently no interactive components.

                    Passing Data Through Props
                    To get our feet wet, let’s try passing some data from our Board component to our Square component.

                    We strongly recommend typing code by hand as you’re working through the tutorial and not using copy/paste.

                    This will help you develop muscle memory and a stronger understanding.

                    In Board’s renderSquare method, change the code to pass a prop called value to the Square:
                </p>

                <p>What Are We Building?
                    In this tutorial, we’ll show how to build an interactive tic-tac-toe game with React.

                    You can see what we’ll be building here: Final Result.

                    If the code doesn’t make sense to you, or if you are unfamiliar with the code’s syntax, don’t worry!

                    The goal of this tutorial is to help you understand React and its syntax.

                    We recommend that you check out the tic-tac-toe game before continuing with the tutorial.

                    One of the features that you’ll notice is that there is a numbered list to the right of the game’s board.

                    This list gives you a history of all of the moves that have occurred in the game, and it is updated as the game progresses.

                    You can close the tic-tac-toe game once you’re familiar with it. We’ll be starting from a simpler template in this tutorial.

                    Our next step is to set you up so that you can start building the game.

                    Prerequisites
                    We’ll assume that you have some familiarity with HTML and JavaScript,
                    but you should be able to follow along even if you’re coming from a different programming language.

                    We’ll also assume that you’re familiar with programming concepts like functions, objects, arrays, and to a lesser extent, classes.

                    If you need to review JavaScript, we recommend reading this guide.

                    Note that we’re also using some features from ES6 — a recent version of JavaScript. In this tutorial, we’re using arrow functions, classes, let, and const statements.

                    You can use the Babel REPL to check what ES6 code compiles to.

                    Setup for the Tutorial
                    There are two ways to complete this tutorial:
                    you can either write the code in your browser, or you can set up a local development environment on your computer.

                    Setup Option 1: Write Code in the Browser
                    This is the quickest way to get started!

                    First, open this Starter Code in a new tab.

                    The new tab should display an empty tic-tac-toe game board and React code. We will be editing the React code in this tutorial.

                    You can now skip the second setup option, and go to the Overview section to get an overview of React.

                    Setup Option 2: Local Development Environment
                    This is completely optional and not required for this tutorial!


                    Optional: Instructions for following along locally using your preferred text editor
                    Help, I’m Stuck!
                    If you get stuck, check out the community support resources.

                    In particular, Reactiflux Chat is a great way to get help quickly.

                    If you don’t receive an answer, or if you remain stuck,
                    please file an issue, and we’ll help you out.

                    Overview
                    Now that you’re set up, let’s get an overview of React!

                    What Is React?
                    React is a declarative, efficient, and flexible JavaScript library for building user interfaces.

                    It lets you compose complex UIs from small and isolated pieces of code called “components”.

                    React has a few different kinds of components, but we’ll start with React.Component subclasses:

                    We’ll get to the funny XML-like tags soon. We use components to tell React what we want to see on the screen.

                    When our data changes, React will efficiently update and re-render our components.

                    Here, ShoppingList is a React component class, or React component type. A component takes in parameters,
                    called props (short for “properties”), and returns a hierarchy of views to display via the render method.

                    The render method returns a description of what you want to see on the screen.

                    React takes the description and displays the result.

                    In particular, render returns a React element, which is a lightweight description of what to render.

                    Most React developers use a special syntax called “JSX” which makes these structures easier to write.

                    The div syntax is transformed at build time to React.createElement('div').

                    The example above is equivalent to:

                    See full expanded version.

                    If you’re curious, createElement() is described in more detail in the API reference,
                    but we won’t be using it in this tutorial.

                    Instead, we will keep using JSX.

                    JSX comes with the full power of JavaScript. You can put any JavaScript expressions within braces inside JSX.

                    Each React element is a JavaScript object that you can store in a variable or pass around in your program.

                    The ShoppingList component above only renders built-in DOM components like and .

                    But you can compose and render custom React components too.

                    For example, we can now refer to the whole shopping list by writing ShoppingList.

                    Each React component is encapsulated and can operate independently;
                    this allows you to build complex UIs from simple components.

                    Inspecting the Starter Code

                    If you’re going to work on the tutorial in your browser, open this code in a new tab: Starter Code.

                    If you’re going to work on the tutorial locally, instead open src/index.js in your project folder (you have already touched this file during the setup).

                    This Starter Code is the base of what we’re building. We’ve provided the CSS styling so that you only need to focus on learning React and programming the tic-tac-toe game.

                    By inspecting the code, you’ll notice that we have three React components:

                    Square
                    Board
                    Game
                    The Square component renders a single and the Board renders 9 squares.

                    The Game component renders a board with placeholder values which we’ll modify later.

                    There are currently no interactive components.

                    Passing Data Through Props
                    To get our feet wet, let’s try passing some data from our Board component to our Square component.

                    We strongly recommend typing code by hand as you’re working through the tutorial and not using copy/paste.

                    This will help you develop muscle memory and a stronger understanding.

                    In Board’s renderSquare method, change the code to pass a prop called value to the Square:
                </p>

                <p>What Are We Building?
                    In this tutorial, we’ll show how to build an interactive tic-tac-toe game with React.

                    You can see what we’ll be building here: Final Result.

                    If the code doesn’t make sense to you, or if you are unfamiliar with the code’s syntax, don’t worry!

                    The goal of this tutorial is to help you understand React and its syntax.

                    We recommend that you check out the tic-tac-toe game before continuing with the tutorial.

                    One of the features that you’ll notice is that there is a numbered list to the right of the game’s board.

                    This list gives you a history of all of the moves that have occurred in the game, and it is updated as the game progresses.

                    You can close the tic-tac-toe game once you’re familiar with it. We’ll be starting from a simpler template in this tutorial.

                    Our next step is to set you up so that you can start building the game.

                    Prerequisites
                    We’ll assume that you have some familiarity with HTML and JavaScript,
                    but you should be able to follow along even if you’re coming from a different programming language.

                    We’ll also assume that you’re familiar with programming concepts like functions, objects, arrays, and to a lesser extent, classes.

                    If you need to review JavaScript, we recommend reading this guide.

                    Note that we’re also using some features from ES6 — a recent version of JavaScript. In this tutorial, we’re using arrow functions, classes, let, and const statements.

                    You can use the Babel REPL to check what ES6 code compiles to.

                    Setup for the Tutorial
                    There are two ways to complete this tutorial:
                    you can either write the code in your browser, or you can set up a local development environment on your computer.

                    Setup Option 1: Write Code in the Browser
                    This is the quickest way to get started!

                    First, open this Starter Code in a new tab.

                    The new tab should display an empty tic-tac-toe game board and React code. We will be editing the React code in this tutorial.

                    You can now skip the second setup option, and go to the Overview section to get an overview of React.

                    Setup Option 2: Local Development Environment
                    This is completely optional and not required for this tutorial!


                    Optional: Instructions for following along locally using your preferred text editor
                    Help, I’m Stuck!
                    If you get stuck, check out the community support resources.

                    In particular, Reactiflux Chat is a great way to get help quickly.

                    If you don’t receive an answer, or if you remain stuck,
                    please file an issue, and we’ll help you out.

                    Overview
                    Now that you’re set up, let’s get an overview of React!

                    What Is React?
                    React is a declarative, efficient, and flexible JavaScript library for building user interfaces.

                    It lets you compose complex UIs from small and isolated pieces of code called “components”.

                    React has a few different kinds of components, but we’ll start with React.Component subclasses:

                    We’ll get to the funny XML-like tags soon. We use components to tell React what we want to see on the screen.

                    When our data changes, React will efficiently update and re-render our components.

                    Here, ShoppingList is a React component class, or React component type. A component takes in parameters,
                    called props (short for “properties”), and returns a hierarchy of views to display via the render method.

                    The render method returns a description of what you want to see on the screen.

                    React takes the description and displays the result.

                    In particular, render returns a React element, which is a lightweight description of what to render.

                    Most React developers use a special syntax called “JSX” which makes these structures easier to write.

                    The div syntax is transformed at build time to React.createElement('div').

                    The example above is equivalent to:

                    See full expanded version.

                    If you’re curious, createElement() is described in more detail in the API reference,
                    but we won’t be using it in this tutorial.

                    Instead, we will keep using JSX.

                    JSX comes with the full power of JavaScript. You can put any JavaScript expressions within braces inside JSX.

                    Each React element is a JavaScript object that you can store in a variable or pass around in your program.

                    The ShoppingList component above only renders built-in DOM components like and .

                    But you can compose and render custom React components too.

                    For example, we can now refer to the whole shopping list by writing ShoppingList.

                    Each React component is encapsulated and can operate independently;
                    this allows you to build complex UIs from simple components.

                    Inspecting the Starter Code

                    If you’re going to work on the tutorial in your browser, open this code in a new tab: Starter Code.

                    If you’re going to work on the tutorial locally, instead open src/index.js in your project folder (you have already touched this file during the setup).

                    This Starter Code is the base of what we’re building. We’ve provided the CSS styling so that you only need to focus on learning React and programming the tic-tac-toe game.

                    By inspecting the code, you’ll notice that we have three React components:

                    Square
                    Board
                    Game
                    The Square component renders a single and the Board renders 9 squares.

                    The Game component renders a board with placeholder values which we’ll modify later.

                    There are currently no interactive components.

                    Passing Data Through Props
                    To get our feet wet, let’s try passing some data from our Board component to our Square component.

                    We strongly recommend typing code by hand as you’re working through the tutorial and not using copy/paste.

                    This will help you develop muscle memory and a stronger understanding.

                    In Board’s renderSquare method, change the code to pass a prop called value to the Square:
                </p>

                <p>What Are We Building?
                    In this tutorial, we’ll show how to build an interactive tic-tac-toe game with React.

                    You can see what we’ll be building here: Final Result.

                    If the code doesn’t make sense to you, or if you are unfamiliar with the code’s syntax, don’t worry!

                    The goal of this tutorial is to help you understand React and its syntax.

                    We recommend that you check out the tic-tac-toe game before continuing with the tutorial.

                    One of the features that you’ll notice is that there is a numbered list to the right of the game’s board.

                    This list gives you a history of all of the moves that have occurred in the game, and it is updated as the game progresses.

                    You can close the tic-tac-toe game once you’re familiar with it. We’ll be starting from a simpler template in this tutorial.

                    Our next step is to set you up so that you can start building the game.

                    Prerequisites
                    We’ll assume that you have some familiarity with HTML and JavaScript,
                    but you should be able to follow along even if you’re coming from a different programming language.

                    We’ll also assume that you’re familiar with programming concepts like functions, objects, arrays, and to a lesser extent, classes.

                    If you need to review JavaScript, we recommend reading this guide.

                    Note that we’re also using some features from ES6 — a recent version of JavaScript. In this tutorial, we’re using arrow functions, classes, let, and const statements.

                    You can use the Babel REPL to check what ES6 code compiles to.

                    Setup for the Tutorial
                    There are two ways to complete this tutorial:
                    you can either write the code in your browser, or you can set up a local development environment on your computer.

                    Setup Option 1: Write Code in the Browser
                    This is the quickest way to get started!

                    First, open this Starter Code in a new tab.

                    The new tab should display an empty tic-tac-toe game board and React code. We will be editing the React code in this tutorial.

                    You can now skip the second setup option, and go to the Overview section to get an overview of React.

                    Setup Option 2: Local Development Environment
                    This is completely optional and not required for this tutorial!


                    Optional: Instructions for following along locally using your preferred text editor
                    Help, I’m Stuck!
                    If you get stuck, check out the community support resources.

                    In particular, Reactiflux Chat is a great way to get help quickly.

                    If you don’t receive an answer, or if you remain stuck,
                    please file an issue, and we’ll help you out.

                    Overview
                    Now that you’re set up, let’s get an overview of React!

                    What Is React?
                    React is a declarative, efficient, and flexible JavaScript library for building user interfaces.

                    It lets you compose complex UIs from small and isolated pieces of code called “components”.

                    React has a few different kinds of components, but we’ll start with React.Component subclasses:

                    We’ll get to the funny XML-like tags soon. We use components to tell React what we want to see on the screen.

                    When our data changes, React will efficiently update and re-render our components.

                    Here, ShoppingList is a React component class, or React component type. A component takes in parameters,
                    called props (short for “properties”), and returns a hierarchy of views to display via the render method.

                    The render method returns a description of what you want to see on the screen.

                    React takes the description and displays the result.

                    In particular, render returns a React element, which is a lightweight description of what to render.

                    Most React developers use a special syntax called “JSX” which makes these structures easier to write.

                    The div syntax is transformed at build time to React.createElement('div').

                    The example above is equivalent to:

                    See full expanded version.

                    If you’re curious, createElement() is described in more detail in the API reference,
                    but we won’t be using it in this tutorial.

                    Instead, we will keep using JSX.

                    JSX comes with the full power of JavaScript. You can put any JavaScript expressions within braces inside JSX.

                    Each React element is a JavaScript object that you can store in a variable or pass around in your program.

                    The ShoppingList component above only renders built-in DOM components like and .

                    But you can compose and render custom React components too.

                    For example, we can now refer to the whole shopping list by writing ShoppingList.

                    Each React component is encapsulated and can operate independently;
                    this allows you to build complex UIs from simple components.

                    Inspecting the Starter Code

                    If you’re going to work on the tutorial in your browser, open this code in a new tab: Starter Code.

                    If you’re going to work on the tutorial locally, instead open src/index.js in your project folder (you have already touched this file during the setup).

                    This Starter Code is the base of what we’re building. We’ve provided the CSS styling so that you only need to focus on learning React and programming the tic-tac-toe game.

                    By inspecting the code, you’ll notice that we have three React components:

                    Square
                    Board
                    Game
                    The Square component renders a single and the Board renders 9 squares.

                    The Game component renders a board with placeholder values which we’ll modify later.

                    There are currently no interactive components.

                    Passing Data Through Props
                    To get our feet wet, let’s try passing some data from our Board component to our Square component.

                    We strongly recommend typing code by hand as you’re working through the tutorial and not using copy/paste.

                    This will help you develop muscle memory and a stronger understanding.

                    In Board’s renderSquare method, change the code to pass a prop called value to the Square:
                </p>

                <p>What Are We Building?
                    In this tutorial, we’ll show how to build an interactive tic-tac-toe game with React.

                    You can see what we’ll be building here: Final Result.

                    If the code doesn’t make sense to you, or if you are unfamiliar with the code’s syntax, don’t worry!

                    The goal of this tutorial is to help you understand React and its syntax.

                    We recommend that you check out the tic-tac-toe game before continuing with the tutorial.

                    One of the features that you’ll notice is that there is a numbered list to the right of the game’s board.

                    This list gives you a history of all of the moves that have occurred in the game, and it is updated as the game progresses.

                    You can close the tic-tac-toe game once you’re familiar with it. We’ll be starting from a simpler template in this tutorial.

                    Our next step is to set you up so that you can start building the game.

                    Prerequisites
                    We’ll assume that you have some familiarity with HTML and JavaScript,
                    but you should be able to follow along even if you’re coming from a different programming language.

                    We’ll also assume that you’re familiar with programming concepts like functions, objects, arrays, and to a lesser extent, classes.

                    If you need to review JavaScript, we recommend reading this guide.

                    Note that we’re also using some features from ES6 — a recent version of JavaScript. In this tutorial, we’re using arrow functions, classes, let, and const statements.

                    You can use the Babel REPL to check what ES6 code compiles to.

                    Setup for the Tutorial
                    There are two ways to complete this tutorial:
                    you can either write the code in your browser, or you can set up a local development environment on your computer.

                    Setup Option 1: Write Code in the Browser
                    This is the quickest way to get started!

                    First, open this Starter Code in a new tab.

                    The new tab should display an empty tic-tac-toe game board and React code. We will be editing the React code in this tutorial.

                    You can now skip the second setup option, and go to the Overview section to get an overview of React.

                    Setup Option 2: Local Development Environment
                    This is completely optional and not required for this tutorial!


                    Optional: Instructions for following along locally using your preferred text editor
                    Help, I’m Stuck!
                    If you get stuck, check out the community support resources.

                    In particular, Reactiflux Chat is a great way to get help quickly.

                    If you don’t receive an answer, or if you remain stuck,
                    please file an issue, and we’ll help you out.

                    Overview
                    Now that you’re set up, let’s get an overview of React!

                    What Is React?
                    React is a declarative, efficient, and flexible JavaScript library for building user interfaces.

                    It lets you compose complex UIs from small and isolated pieces of code called “components”.

                    React has a few different kinds of components, but we’ll start with React.Component subclasses:

                    We’ll get to the funny XML-like tags soon. We use components to tell React what we want to see on the screen.

                    When our data changes, React will efficiently update and re-render our components.

                    Here, ShoppingList is a React component class, or React component type. A component takes in parameters,
                    called props (short for “properties”), and returns a hierarchy of views to display via the render method.

                    The render method returns a description of what you want to see on the screen.

                    React takes the description and displays the result.

                    In particular, render returns a React element, which is a lightweight description of what to render.

                    Most React developers use a special syntax called “JSX” which makes these structures easier to write.

                    The div syntax is transformed at build time to React.createElement('div').

                    The example above is equivalent to:

                    See full expanded version.

                    If you’re curious, createElement() is described in more detail in the API reference,
                    but we won’t be using it in this tutorial.

                    Instead, we will keep using JSX.

                    JSX comes with the full power of JavaScript. You can put any JavaScript expressions within braces inside JSX.

                    Each React element is a JavaScript object that you can store in a variable or pass around in your program.

                    The ShoppingList component above only renders built-in DOM components like and .

                    But you can compose and render custom React components too.

                    For example, we can now refer to the whole shopping list by writing ShoppingList.

                    Each React component is encapsulated and can operate independently;
                    this allows you to build complex UIs from simple components.

                    Inspecting the Starter Code

                    If you’re going to work on the tutorial in your browser, open this code in a new tab: Starter Code.

                    If you’re going to work on the tutorial locally, instead open src/index.js in your project folder (you have already touched this file during the setup).

                    This Starter Code is the base of what we’re building. We’ve provided the CSS styling so that you only need to focus on learning React and programming the tic-tac-toe game.

                    By inspecting the code, you’ll notice that we have three React components:

                    Square
                    Board
                    Game
                    The Square component renders a single and the Board renders 9 squares.

                    The Game component renders a board with placeholder values which we’ll modify later.

                    There are currently no interactive components.

                    Passing Data Through Props
                    To get our feet wet, let’s try passing some data from our Board component to our Square component.

                    We strongly recommend typing code by hand as you’re working through the tutorial and not using copy/paste.

                    This will help you develop muscle memory and a stronger understanding.

                    In Board’s renderSquare method, change the code to pass a prop called value to the Square:
                </p>

                <p>What Are We Building?
                    In this tutorial, we’ll show how to build an interactive tic-tac-toe game with React.

                    You can see what we’ll be building here: Final Result.

                    If the code doesn’t make sense to you, or if you are unfamiliar with the code’s syntax, don’t worry!

                    The goal of this tutorial is to help you understand React and its syntax.

                    We recommend that you check out the tic-tac-toe game before continuing with the tutorial.

                    One of the features that you’ll notice is that there is a numbered list to the right of the game’s board.

                    This list gives you a history of all of the moves that have occurred in the game, and it is updated as the game progresses.

                    You can close the tic-tac-toe game once you’re familiar with it. We’ll be starting from a simpler template in this tutorial.

                    Our next step is to set you up so that you can start building the game.

                    Prerequisites
                    We’ll assume that you have some familiarity with HTML and JavaScript,
                    but you should be able to follow along even if you’re coming from a different programming language.

                    We’ll also assume that you’re familiar with programming concepts like functions, objects, arrays, and to a lesser extent, classes.

                    If you need to review JavaScript, we recommend reading this guide.

                    Note that we’re also using some features from ES6 — a recent version of JavaScript. In this tutorial, we’re using arrow functions, classes, let, and const statements.

                    You can use the Babel REPL to check what ES6 code compiles to.

                    Setup for the Tutorial
                    There are two ways to complete this tutorial:
                    you can either write the code in your browser, or you can set up a local development environment on your computer.

                    Setup Option 1: Write Code in the Browser
                    This is the quickest way to get started!

                    First, open this Starter Code in a new tab.

                    The new tab should display an empty tic-tac-toe game board and React code. We will be editing the React code in this tutorial.

                    You can now skip the second setup option, and go to the Overview section to get an overview of React.

                    Setup Option 2: Local Development Environment
                    This is completely optional and not required for this tutorial!


                    Optional: Instructions for following along locally using your preferred text editor
                    Help, I’m Stuck!
                    If you get stuck, check out the community support resources.

                    In particular, Reactiflux Chat is a great way to get help quickly.

                    If you don’t receive an answer, or if you remain stuck,
                    please file an issue, and we’ll help you out.

                    Overview
                    Now that you’re set up, let’s get an overview of React!

                    What Is React?
                    React is a declarative, efficient, and flexible JavaScript library for building user interfaces.

                    It lets you compose complex UIs from small and isolated pieces of code called “components”.

                    React has a few different kinds of components, but we’ll start with React.Component subclasses:

                    We’ll get to the funny XML-like tags soon. We use components to tell React what we want to see on the screen.

                    When our data changes, React will efficiently update and re-render our components.

                    Here, ShoppingList is a React component class, or React component type. A component takes in parameters,
                    called props (short for “properties”), and returns a hierarchy of views to display via the render method.

                    The render method returns a description of what you want to see on the screen.

                    React takes the description and displays the result.

                    In particular, render returns a React element, which is a lightweight description of what to render.

                    Most React developers use a special syntax called “JSX” which makes these structures easier to write.

                    The div syntax is transformed at build time to React.createElement('div').

                    The example above is equivalent to:

                    See full expanded version.

                    If you’re curious, createElement() is described in more detail in the API reference,
                    but we won’t be using it in this tutorial.

                    Instead, we will keep using JSX.

                    JSX comes with the full power of JavaScript. You can put any JavaScript expressions within braces inside JSX.

                    Each React element is a JavaScript object that you can store in a variable or pass around in your program.

                    The ShoppingList component above only renders built-in DOM components like and .

                    But you can compose and render custom React components too.

                    For example, we can now refer to the whole shopping list by writing ShoppingList.

                    Each React component is encapsulated and can operate independently;
                    this allows you to build complex UIs from simple components.

                    Inspecting the Starter Code

                    If you’re going to work on the tutorial in your browser, open this code in a new tab: Starter Code.

                    If you’re going to work on the tutorial locally, instead open src/index.js in your project folder (you have already touched this file during the setup).

                    This Starter Code is the base of what we’re building. We’ve provided the CSS styling so that you only need to focus on learning React and programming the tic-tac-toe game.

                    By inspecting the code, you’ll notice that we have three React components:

                    Square
                    Board
                    Game
                    The Square component renders a single and the Board renders 9 squares.

                    The Game component renders a board with placeholder values which we’ll modify later.

                    There are currently no interactive components.

                    Passing Data Through Props
                    To get our feet wet, let’s try passing some data from our Board component to our Square component.

                    We strongly recommend typing code by hand as you’re working through the tutorial and not using copy/paste.

                    This will help you develop muscle memory and a stronger understanding.

                    In Board’s renderSquare method, change the code to pass a prop called value to the Square:
                </p>

                <p>What Are We Building?
                    In this tutorial, we’ll show how to build an interactive tic-tac-toe game with React.

                    You can see what we’ll be building here: Final Result.

                    If the code doesn’t make sense to you, or if you are unfamiliar with the code’s syntax, don’t worry!

                    The goal of this tutorial is to help you understand React and its syntax.

                    We recommend that you check out the tic-tac-toe game before continuing with the tutorial.

                    One of the features that you’ll notice is that there is a numbered list to the right of the game’s board.

                    This list gives you a history of all of the moves that have occurred in the game, and it is updated as the game progresses.

                    You can close the tic-tac-toe game once you’re familiar with it. We’ll be starting from a simpler template in this tutorial.

                    Our next step is to set you up so that you can start building the game.

                    Prerequisites
                    We’ll assume that you have some familiarity with HTML and JavaScript,
                    but you should be able to follow along even if you’re coming from a different programming language.

                    We’ll also assume that you’re familiar with programming concepts like functions, objects, arrays, and to a lesser extent, classes.

                    If you need to review JavaScript, we recommend reading this guide.

                    Note that we’re also using some features from ES6 — a recent version of JavaScript. In this tutorial, we’re using arrow functions, classes, let, and const statements.

                    You can use the Babel REPL to check what ES6 code compiles to.

                    Setup for the Tutorial
                    There are two ways to complete this tutorial:
                    you can either write the code in your browser, or you can set up a local development environment on your computer.

                    Setup Option 1: Write Code in the Browser
                    This is the quickest way to get started!

                    First, open this Starter Code in a new tab.

                    The new tab should display an empty tic-tac-toe game board and React code. We will be editing the React code in this tutorial.

                    You can now skip the second setup option, and go to the Overview section to get an overview of React.

                    Setup Option 2: Local Development Environment
                    This is completely optional and not required for this tutorial!


                    Optional: Instructions for following along locally using your preferred text editor
                    Help, I’m Stuck!
                    If you get stuck, check out the community support resources.

                    In particular, Reactiflux Chat is a great way to get help quickly.

                    If you don’t receive an answer, or if you remain stuck,
                    please file an issue, and we’ll help you out.

                    Overview
                    Now that you’re set up, let’s get an overview of React!

                    What Is React?
                    React is a declarative, efficient, and flexible JavaScript library for building user interfaces.

                    It lets you compose complex UIs from small and isolated pieces of code called “components”.

                    React has a few different kinds of components, but we’ll start with React.Component subclasses:

                    We’ll get to the funny XML-like tags soon. We use components to tell React what we want to see on the screen.

                    When our data changes, React will efficiently update and re-render our components.

                    Here, ShoppingList is a React component class, or React component type. A component takes in parameters,
                    called props (short for “properties”), and returns a hierarchy of views to display via the render method.

                    The render method returns a description of what you want to see on the screen.

                    React takes the description and displays the result.

                    In particular, render returns a React element, which is a lightweight description of what to render.

                    Most React developers use a special syntax called “JSX” which makes these structures easier to write.

                    The div syntax is transformed at build time to React.createElement('div').

                    The example above is equivalent to:

                    See full expanded version.

                    If you’re curious, createElement() is described in more detail in the API reference,
                    but we won’t be using it in this tutorial.

                    Instead, we will keep using JSX.

                    JSX comes with the full power of JavaScript. You can put any JavaScript expressions within braces inside JSX.

                    Each React element is a JavaScript object that you can store in a variable or pass around in your program.

                    The ShoppingList component above only renders built-in DOM components like and .

                    But you can compose and render custom React components too.

                    For example, we can now refer to the whole shopping list by writing ShoppingList.

                    Each React component is encapsulated and can operate independently;
                    this allows you to build complex UIs from simple components.

                    Inspecting the Starter Code

                    If you’re going to work on the tutorial in your browser, open this code in a new tab: Starter Code.

                    If you’re going to work on the tutorial locally, instead open src/index.js in your project folder (you have already touched this file during the setup).

                    This Starter Code is the base of what we’re building. We’ve provided the CSS styling so that you only need to focus on learning React and programming the tic-tac-toe game.

                    By inspecting the code, you’ll notice that we have three React components:

                    Square
                    Board
                    Game
                    The Square component renders a single and the Board renders 9 squares.

                    The Game component renders a board with placeholder values which we’ll modify later.

                    There are currently no interactive components.

                    Passing Data Through Props
                    To get our feet wet, let’s try passing some data from our Board component to our Square component.

                    We strongly recommend typing code by hand as you’re working through the tutorial and not using copy/paste.

                    This will help you develop muscle memory and a stronger understanding.

                    In Board’s renderSquare method, change the code to pass a prop called value to the Square:
                </p>

                <p>What Are We Building?
                    In this tutorial, we’ll show how to build an interactive tic-tac-toe game with React.

                    You can see what we’ll be building here: Final Result.

                    If the code doesn’t make sense to you, or if you are unfamiliar with the code’s syntax, don’t worry!

                    The goal of this tutorial is to help you understand React and its syntax.

                    We recommend that you check out the tic-tac-toe game before continuing with the tutorial.

                    One of the features that you’ll notice is that there is a numbered list to the right of the game’s board.

                    This list gives you a history of all of the moves that have occurred in the game, and it is updated as the game progresses.

                    You can close the tic-tac-toe game once you’re familiar with it. We’ll be starting from a simpler template in this tutorial.

                    Our next step is to set you up so that you can start building the game.

                    Prerequisites
                    We’ll assume that you have some familiarity with HTML and JavaScript,
                    but you should be able to follow along even if you’re coming from a different programming language.

                    We’ll also assume that you’re familiar with programming concepts like functions, objects, arrays, and to a lesser extent, classes.

                    If you need to review JavaScript, we recommend reading this guide.

                    Note that we’re also using some features from ES6 — a recent version of JavaScript. In this tutorial, we’re using arrow functions, classes, let, and const statements.

                    You can use the Babel REPL to check what ES6 code compiles to.

                    Setup for the Tutorial
                    There are two ways to complete this tutorial:
                    you can either write the code in your browser, or you can set up a local development environment on your computer.

                    Setup Option 1: Write Code in the Browser
                    This is the quickest way to get started!

                    First, open this Starter Code in a new tab.

                    The new tab should display an empty tic-tac-toe game board and React code. We will be editing the React code in this tutorial.

                    You can now skip the second setup option, and go to the Overview section to get an overview of React.

                    Setup Option 2: Local Development Environment
                    This is completely optional and not required for this tutorial!


                    Optional: Instructions for following along locally using your preferred text editor
                    Help, I’m Stuck!
                    If you get stuck, check out the community support resources.

                    In particular, Reactiflux Chat is a great way to get help quickly.

                    If you don’t receive an answer, or if you remain stuck,
                    please file an issue, and we’ll help you out.

                    Overview
                    Now that you’re set up, let’s get an overview of React!

                    What Is React?
                    React is a declarative, efficient, and flexible JavaScript library for building user interfaces.

                    It lets you compose complex UIs from small and isolated pieces of code called “components”.

                    React has a few different kinds of components, but we’ll start with React.Component subclasses:

                    We’ll get to the funny XML-like tags soon. We use components to tell React what we want to see on the screen.

                    When our data changes, React will efficiently update and re-render our components.

                    Here, ShoppingList is a React component class, or React component type. A component takes in parameters,
                    called props (short for “properties”), and returns a hierarchy of views to display via the render method.

                    The render method returns a description of what you want to see on the screen.

                    React takes the description and displays the result.

                    In particular, render returns a React element, which is a lightweight description of what to render.

                    Most React developers use a special syntax called “JSX” which makes these structures easier to write.

                    The div syntax is transformed at build time to React.createElement('div').

                    The example above is equivalent to:

                    See full expanded version.

                    If you’re curious, createElement() is described in more detail in the API reference,
                    but we won’t be using it in this tutorial.

                    Instead, we will keep using JSX.

                    JSX comes with the full power of JavaScript. You can put any JavaScript expressions within braces inside JSX.

                    Each React element is a JavaScript object that you can store in a variable or pass around in your program.

                    The ShoppingList component above only renders built-in DOM components like and .

                    But you can compose and render custom React components too.

                    For example, we can now refer to the whole shopping list by writing ShoppingList.

                    Each React component is encapsulated and can operate independently;
                    this allows you to build complex UIs from simple components.

                    Inspecting the Starter Code

                    If you’re going to work on the tutorial in your browser, open this code in a new tab: Starter Code.

                    If you’re going to work on the tutorial locally, instead open src/index.js in your project folder (you have already touched this file during the setup).

                    This Starter Code is the base of what we’re building. We’ve provided the CSS styling so that you only need to focus on learning React and programming the tic-tac-toe game.

                    By inspecting the code, you’ll notice that we have three React components:

                    Square
                    Board
                    Game
                    The Square component renders a single and the Board renders 9 squares.

                    The Game component renders a board with placeholder values which we’ll modify later.

                    There are currently no interactive components.

                    Passing Data Through Props
                    To get our feet wet, let’s try passing some data from our Board component to our Square component.

                    We strongly recommend typing code by hand as you’re working through the tutorial and not using copy/paste.

                    This will help you develop muscle memory and a stronger understanding.

                    In Board’s renderSquare method, change the code to pass a prop called value to the Square:
                </p>

                <p>What Are We Building?
                    In this tutorial, we’ll show how to build an interactive tic-tac-toe game with React.

                    You can see what we’ll be building here: Final Result.

                    If the code doesn’t make sense to you, or if you are unfamiliar with the code’s syntax, don’t worry!

                    The goal of this tutorial is to help you understand React and its syntax.

                    We recommend that you check out the tic-tac-toe game before continuing with the tutorial.

                    One of the features that you’ll notice is that there is a numbered list to the right of the game’s board.

                    This list gives you a history of all of the moves that have occurred in the game, and it is updated as the game progresses.

                    You can close the tic-tac-toe game once you’re familiar with it. We’ll be starting from a simpler template in this tutorial.

                    Our next step is to set you up so that you can start building the game.

                    Prerequisites
                    We’ll assume that you have some familiarity with HTML and JavaScript,
                    but you should be able to follow along even if you’re coming from a different programming language.

                    We’ll also assume that you’re familiar with programming concepts like functions, objects, arrays, and to a lesser extent, classes.

                    If you need to review JavaScript, we recommend reading this guide.

                    Note that we’re also using some features from ES6 — a recent version of JavaScript. In this tutorial, we’re using arrow functions, classes, let, and const statements.

                    You can use the Babel REPL to check what ES6 code compiles to.

                    Setup for the Tutorial
                    There are two ways to complete this tutorial:
                    you can either write the code in your browser, or you can set up a local development environment on your computer.

                    Setup Option 1: Write Code in the Browser
                    This is the quickest way to get started!

                    First, open this Starter Code in a new tab.

                    The new tab should display an empty tic-tac-toe game board and React code. We will be editing the React code in this tutorial.

                    You can now skip the second setup option, and go to the Overview section to get an overview of React.

                    Setup Option 2: Local Development Environment
                    This is completely optional and not required for this tutorial!


                    Optional: Instructions for following along locally using your preferred text editor
                    Help, I’m Stuck!
                    If you get stuck, check out the community support resources.

                    In particular, Reactiflux Chat is a great way to get help quickly.

                    If you don’t receive an answer, or if you remain stuck,
                    please file an issue, and we’ll help you out.

                    Overview
                    Now that you’re set up, let’s get an overview of React!

                    What Is React?
                    React is a declarative, efficient, and flexible JavaScript library for building user interfaces.

                    It lets you compose complex UIs from small and isolated pieces of code called “components”.

                    React has a few different kinds of components, but we’ll start with React.Component subclasses:

                    We’ll get to the funny XML-like tags soon. We use components to tell React what we want to see on the screen.

                    When our data changes, React will efficiently update and re-render our components.

                    Here, ShoppingList is a React component class, or React component type. A component takes in parameters,
                    called props (short for “properties”), and returns a hierarchy of views to display via the render method.

                    The render method returns a description of what you want to see on the screen.

                    React takes the description and displays the result.

                    In particular, render returns a React element, which is a lightweight description of what to render.

                    Most React developers use a special syntax called “JSX” which makes these structures easier to write.

                    The div syntax is transformed at build time to React.createElement('div').

                    The example above is equivalent to:

                    See full expanded version.

                    If you’re curious, createElement() is described in more detail in the API reference,
                    but we won’t be using it in this tutorial.

                    Instead, we will keep using JSX.

                    JSX comes with the full power of JavaScript. You can put any JavaScript expressions within braces inside JSX.

                    Each React element is a JavaScript object that you can store in a variable or pass around in your program.

                    The ShoppingList component above only renders built-in DOM components like and .

                    But you can compose and render custom React components too.

                    For example, we can now refer to the whole shopping list by writing ShoppingList.

                    Each React component is encapsulated and can operate independently;
                    this allows you to build complex UIs from simple components.

                    Inspecting the Starter Code

                    If you’re going to work on the tutorial in your browser, open this code in a new tab: Starter Code.

                    If you’re going to work on the tutorial locally, instead open src/index.js in your project folder (you have already touched this file during the setup).

                    This Starter Code is the base of what we’re building. We’ve provided the CSS styling so that you only need to focus on learning React and programming the tic-tac-toe game.

                    By inspecting the code, you’ll notice that we have three React components:

                    Square
                    Board
                    Game
                    The Square component renders a single and the Board renders 9 squares.

                    The Game component renders a board with placeholder values which we’ll modify later.

                    There are currently no interactive components.

                    Passing Data Through Props
                    To get our feet wet, let’s try passing some data from our Board component to our Square component.

                    We strongly recommend typing code by hand as you’re working through the tutorial and not using copy/paste.

                    This will help you develop muscle memory and a stronger understanding.

                    In Board’s renderSquare method, change the code to pass a prop called value to the Square:
                </p>

                <p>What Are We Building?
                    In this tutorial, we’ll show how to build an interactive tic-tac-toe game with React.

                    You can see what we’ll be building here: Final Result.

                    If the code doesn’t make sense to you, or if you are unfamiliar with the code’s syntax, don’t worry!

                    The goal of this tutorial is to help you understand React and its syntax.

                    We recommend that you check out the tic-tac-toe game before continuing with the tutorial.

                    One of the features that you’ll notice is that there is a numbered list to the right of the game’s board.

                    This list gives you a history of all of the moves that have occurred in the game, and it is updated as the game progresses.

                    You can close the tic-tac-toe game once you’re familiar with it. We’ll be starting from a simpler template in this tutorial.

                    Our next step is to set you up so that you can start building the game.

                    Prerequisites
                    We’ll assume that you have some familiarity with HTML and JavaScript,
                    but you should be able to follow along even if you’re coming from a different programming language.

                    We’ll also assume that you’re familiar with programming concepts like functions, objects, arrays, and to a lesser extent, classes.

                    If you need to review JavaScript, we recommend reading this guide.

                    Note that we’re also using some features from ES6 — a recent version of JavaScript. In this tutorial, we’re using arrow functions, classes, let, and const statements.

                    You can use the Babel REPL to check what ES6 code compiles to.

                    Setup for the Tutorial
                    There are two ways to complete this tutorial:
                    you can either write the code in your browser, or you can set up a local development environment on your computer.

                    Setup Option 1: Write Code in the Browser
                    This is the quickest way to get started!

                    First, open this Starter Code in a new tab.

                    The new tab should display an empty tic-tac-toe game board and React code. We will be editing the React code in this tutorial.

                    You can now skip the second setup option, and go to the Overview section to get an overview of React.

                    Setup Option 2: Local Development Environment
                    This is completely optional and not required for this tutorial!


                    Optional: Instructions for following along locally using your preferred text editor
                    Help, I’m Stuck!
                    If you get stuck, check out the community support resources.

                    In particular, Reactiflux Chat is a great way to get help quickly.

                    If you don’t receive an answer, or if you remain stuck,
                    please file an issue, and we’ll help you out.

                    Overview
                    Now that you’re set up, let’s get an overview of React!

                    What Is React?
                    React is a declarative, efficient, and flexible JavaScript library for building user interfaces.

                    It lets you compose complex UIs from small and isolated pieces of code called “components”.

                    React has a few different kinds of components, but we’ll start with React.Component subclasses:

                    We’ll get to the funny XML-like tags soon. We use components to tell React what we want to see on the screen.

                    When our data changes, React will efficiently update and re-render our components.

                    Here, ShoppingList is a React component class, or React component type. A component takes in parameters,
                    called props (short for “properties”), and returns a hierarchy of views to display via the render method.

                    The render method returns a description of what you want to see on the screen.

                    React takes the description and displays the result.

                    In particular, render returns a React element, which is a lightweight description of what to render.

                    Most React developers use a special syntax called “JSX” which makes these structures easier to write.

                    The div syntax is transformed at build time to React.createElement('div').

                    The example above is equivalent to:

                    See full expanded version.

                    If you’re curious, createElement() is described in more detail in the API reference,
                    but we won’t be using it in this tutorial.

                    Instead, we will keep using JSX.

                    JSX comes with the full power of JavaScript. You can put any JavaScript expressions within braces inside JSX.

                    Each React element is a JavaScript object that you can store in a variable or pass around in your program.

                    The ShoppingList component above only renders built-in DOM components like and .

                    But you can compose and render custom React components too.

                    For example, we can now refer to the whole shopping list by writing ShoppingList.

                    Each React component is encapsulated and can operate independently;
                    this allows you to build complex UIs from simple components.

                    Inspecting the Starter Code

                    If you’re going to work on the tutorial in your browser, open this code in a new tab: Starter Code.

                    If you’re going to work on the tutorial locally, instead open src/index.js in your project folder (you have already touched this file during the setup).

                    This Starter Code is the base of what we’re building. We’ve provided the CSS styling so that you only need to focus on learning React and programming the tic-tac-toe game.

                    By inspecting the code, you’ll notice that we have three React components:

                    Square
                    Board
                    Game
                    The Square component renders a single and the Board renders 9 squares.

                    The Game component renders a board with placeholder values which we’ll modify later.

                    There are currently no interactive components.

                    Passing Data Through Props
                    To get our feet wet, let’s try passing some data from our Board component to our Square component.

                    We strongly recommend typing code by hand as you’re working through the tutorial and not using copy/paste.

                    This will help you develop muscle memory and a stronger understanding.

                    In Board’s renderSquare method, change the code to pass a prop called value to the Square:
                </p>

                <p>What Are We Building?
                    In this tutorial, we’ll show how to build an interactive tic-tac-toe game with React.

                    You can see what we’ll be building here: Final Result.

                    If the code doesn’t make sense to you, or if you are unfamiliar with the code’s syntax, don’t worry!

                    The goal of this tutorial is to help you understand React and its syntax.

                    We recommend that you check out the tic-tac-toe game before continuing with the tutorial.

                    One of the features that you’ll notice is that there is a numbered list to the right of the game’s board.

                    This list gives you a history of all of the moves that have occurred in the game, and it is updated as the game progresses.

                    You can close the tic-tac-toe game once you’re familiar with it. We’ll be starting from a simpler template in this tutorial.

                    Our next step is to set you up so that you can start building the game.

                    Prerequisites
                    We’ll assume that you have some familiarity with HTML and JavaScript,
                    but you should be able to follow along even if you’re coming from a different programming language.

                    We’ll also assume that you’re familiar with programming concepts like functions, objects, arrays, and to a lesser extent, classes.

                    If you need to review JavaScript, we recommend reading this guide.

                    Note that we’re also using some features from ES6 — a recent version of JavaScript. In this tutorial, we’re using arrow functions, classes, let, and const statements.

                    You can use the Babel REPL to check what ES6 code compiles to.

                    Setup for the Tutorial
                    There are two ways to complete this tutorial:
                    you can either write the code in your browser, or you can set up a local development environment on your computer.

                    Setup Option 1: Write Code in the Browser
                    This is the quickest way to get started!

                    First, open this Starter Code in a new tab.

                    The new tab should display an empty tic-tac-toe game board and React code. We will be editing the React code in this tutorial.

                    You can now skip the second setup option, and go to the Overview section to get an overview of React.

                    Setup Option 2: Local Development Environment
                    This is completely optional and not required for this tutorial!


                    Optional: Instructions for following along locally using your preferred text editor
                    Help, I’m Stuck!
                    If you get stuck, check out the community support resources.

                    In particular, Reactiflux Chat is a great way to get help quickly.

                    If you don’t receive an answer, or if you remain stuck,
                    please file an issue, and we’ll help you out.

                    Overview
                    Now that you’re set up, let’s get an overview of React!

                    What Is React?
                    React is a declarative, efficient, and flexible JavaScript library for building user interfaces.

                    It lets you compose complex UIs from small and isolated pieces of code called “components”.

                    React has a few different kinds of components, but we’ll start with React.Component subclasses:

                    We’ll get to the funny XML-like tags soon. We use components to tell React what we want to see on the screen.

                    When our data changes, React will efficiently update and re-render our components.

                    Here, ShoppingList is a React component class, or React component type. A component takes in parameters,
                    called props (short for “properties”), and returns a hierarchy of views to display via the render method.

                    The render method returns a description of what you want to see on the screen.

                    React takes the description and displays the result.

                    In particular, render returns a React element, which is a lightweight description of what to render.

                    Most React developers use a special syntax called “JSX” which makes these structures easier to write.

                    The div syntax is transformed at build time to React.createElement('div').

                    The example above is equivalent to:

                    See full expanded version.

                    If you’re curious, createElement() is described in more detail in the API reference,
                    but we won’t be using it in this tutorial.

                    Instead, we will keep using JSX.

                    JSX comes with the full power of JavaScript. You can put any JavaScript expressions within braces inside JSX.

                    Each React element is a JavaScript object that you can store in a variable or pass around in your program.

                    The ShoppingList component above only renders built-in DOM components like and .

                    But you can compose and render custom React components too.

                    For example, we can now refer to the whole shopping list by writing ShoppingList.

                    Each React component is encapsulated and can operate independently;
                    this allows you to build complex UIs from simple components.

                    Inspecting the Starter Code

                    If you’re going to work on the tutorial in your browser, open this code in a new tab: Starter Code.

                    If you’re going to work on the tutorial locally, instead open src/index.js in your project folder (you have already touched this file during the setup).

                    This Starter Code is the base of what we’re building. We’ve provided the CSS styling so that you only need to focus on learning React and programming the tic-tac-toe game.

                    By inspecting the code, you’ll notice that we have three React components:

                    Square
                    Board
                    Game
                    The Square component renders a single and the Board renders 9 squares.

                    The Game component renders a board with placeholder values which we’ll modify later.

                    There are currently no interactive components.

                    Passing Data Through Props
                    To get our feet wet, let’s try passing some data from our Board component to our Square component.

                    We strongly recommend typing code by hand as you’re working through the tutorial and not using copy/paste.

                    This will help you develop muscle memory and a stronger understanding.

                    In Board’s renderSquare method, change the code to pass a prop called value to the Square:
                </p>

                <p>What Are We Building?
                    In this tutorial, we’ll show how to build an interactive tic-tac-toe game with React.

                    You can see what we’ll be building here: Final Result.

                    If the code doesn’t make sense to you, or if you are unfamiliar with the code’s syntax, don’t worry!

                    The goal of this tutorial is to help you understand React and its syntax.

                    We recommend that you check out the tic-tac-toe game before continuing with the tutorial.

                    One of the features that you’ll notice is that there is a numbered list to the right of the game’s board.

                    This list gives you a history of all of the moves that have occurred in the game, and it is updated as the game progresses.

                    You can close the tic-tac-toe game once you’re familiar with it. We’ll be starting from a simpler template in this tutorial.

                    Our next step is to set you up so that you can start building the game.

                    Prerequisites
                    We’ll assume that you have some familiarity with HTML and JavaScript,
                    but you should be able to follow along even if you’re coming from a different programming language.

                    We’ll also assume that you’re familiar with programming concepts like functions, objects, arrays, and to a lesser extent, classes.

                    If you need to review JavaScript, we recommend reading this guide.

                    Note that we’re also using some features from ES6 — a recent version of JavaScript. In this tutorial, we’re using arrow functions, classes, let, and const statements.

                    You can use the Babel REPL to check what ES6 code compiles to.

                    Setup for the Tutorial
                    There are two ways to complete this tutorial:
                    you can either write the code in your browser, or you can set up a local development environment on your computer.

                    Setup Option 1: Write Code in the Browser
                    This is the quickest way to get started!

                    First, open this Starter Code in a new tab.

                    The new tab should display an empty tic-tac-toe game board and React code. We will be editing the React code in this tutorial.

                    You can now skip the second setup option, and go to the Overview section to get an overview of React.

                    Setup Option 2: Local Development Environment
                    This is completely optional and not required for this tutorial!


                    Optional: Instructions for following along locally using your preferred text editor
                    Help, I’m Stuck!
                    If you get stuck, check out the community support resources.

                    In particular, Reactiflux Chat is a great way to get help quickly.

                    If you don’t receive an answer, or if you remain stuck,
                    please file an issue, and we’ll help you out.

                    Overview
                    Now that you’re set up, let’s get an overview of React!

                    What Is React?
                    React is a declarative, efficient, and flexible JavaScript library for building user interfaces.

                    It lets you compose complex UIs from small and isolated pieces of code called “components”.

                    React has a few different kinds of components, but we’ll start with React.Component subclasses:

                    We’ll get to the funny XML-like tags soon. We use components to tell React what we want to see on the screen.

                    When our data changes, React will efficiently update and re-render our components.

                    Here, ShoppingList is a React component class, or React component type. A component takes in parameters,
                    called props (short for “properties”), and returns a hierarchy of views to display via the render method.

                    The render method returns a description of what you want to see on the screen.

                    React takes the description and displays the result.

                    In particular, render returns a React element, which is a lightweight description of what to render.

                    Most React developers use a special syntax called “JSX” which makes these structures easier to write.

                    The div syntax is transformed at build time to React.createElement('div').

                    The example above is equivalent to:

                    See full expanded version.

                    If you’re curious, createElement() is described in more detail in the API reference,
                    but we won’t be using it in this tutorial.

                    Instead, we will keep using JSX.

                    JSX comes with the full power of JavaScript. You can put any JavaScript expressions within braces inside JSX.

                    Each React element is a JavaScript object that you can store in a variable or pass around in your program.

                    The ShoppingList component above only renders built-in DOM components like and .

                    But you can compose and render custom React components too.

                    For example, we can now refer to the whole shopping list by writing ShoppingList.

                    Each React component is encapsulated and can operate independently;
                    this allows you to build complex UIs from simple components.

                    Inspecting the Starter Code

                    If you’re going to work on the tutorial in your browser, open this code in a new tab: Starter Code.

                    If you’re going to work on the tutorial locally, instead open src/index.js in your project folder (you have already touched this file during the setup).

                    This Starter Code is the base of what we’re building. We’ve provided the CSS styling so that you only need to focus on learning React and programming the tic-tac-toe game.

                    By inspecting the code, you’ll notice that we have three React components:

                    Square
                    Board
                    Game
                    The Square component renders a single and the Board renders 9 squares.

                    The Game component renders a board with placeholder values which we’ll modify later.

                    There are currently no interactive components.

                    Passing Data Through Props
                    To get our feet wet, let’s try passing some data from our Board component to our Square component.

                    We strongly recommend typing code by hand as you’re working through the tutorial and not using copy/paste.

                    This will help you develop muscle memory and a stronger understanding.

                    In Board’s renderSquare method, change the code to pass a prop called value to the Square:
                </p>

                <p>What Are We Building?
                    In this tutorial, we’ll show how to build an interactive tic-tac-toe game with React.

                    You can see what we’ll be building here: Final Result.

                    If the code doesn’t make sense to you, or if you are unfamiliar with the code’s syntax, don’t worry!

                    The goal of this tutorial is to help you understand React and its syntax.

                    We recommend that you check out the tic-tac-toe game before continuing with the tutorial.

                    One of the features that you’ll notice is that there is a numbered list to the right of the game’s board.

                    This list gives you a history of all of the moves that have occurred in the game, and it is updated as the game progresses.

                    You can close the tic-tac-toe game once you’re familiar with it. We’ll be starting from a simpler template in this tutorial.

                    Our next step is to set you up so that you can start building the game.

                    Prerequisites
                    We’ll assume that you have some familiarity with HTML and JavaScript,
                    but you should be able to follow along even if you’re coming from a different programming language.

                    We’ll also assume that you’re familiar with programming concepts like functions, objects, arrays, and to a lesser extent, classes.

                    If you need to review JavaScript, we recommend reading this guide.

                    Note that we’re also using some features from ES6 — a recent version of JavaScript. In this tutorial, we’re using arrow functions, classes, let, and const statements.

                    You can use the Babel REPL to check what ES6 code compiles to.

                    Setup for the Tutorial
                    There are two ways to complete this tutorial:
                    you can either write the code in your browser, or you can set up a local development environment on your computer.

                    Setup Option 1: Write Code in the Browser
                    This is the quickest way to get started!

                    First, open this Starter Code in a new tab.

                    The new tab should display an empty tic-tac-toe game board and React code. We will be editing the React code in this tutorial.

                    You can now skip the second setup option, and go to the Overview section to get an overview of React.

                    Setup Option 2: Local Development Environment
                    This is completely optional and not required for this tutorial!


                    Optional: Instructions for following along locally using your preferred text editor
                    Help, I’m Stuck!
                    If you get stuck, check out the community support resources.

                    In particular, Reactiflux Chat is a great way to get help quickly.

                    If you don’t receive an answer, or if you remain stuck,
                    please file an issue, and we’ll help you out.

                    Overview
                    Now that you’re set up, let’s get an overview of React!

                    What Is React?
                    React is a declarative, efficient, and flexible JavaScript library for building user interfaces.

                    It lets you compose complex UIs from small and isolated pieces of code called “components”.

                    React has a few different kinds of components, but we’ll start with React.Component subclasses:

                    We’ll get to the funny XML-like tags soon. We use components to tell React what we want to see on the screen.

                    When our data changes, React will efficiently update and re-render our components.

                    Here, ShoppingList is a React component class, or React component type. A component takes in parameters,
                    called props (short for “properties”), and returns a hierarchy of views to display via the render method.

                    The render method returns a description of what you want to see on the screen.

                    React takes the description and displays the result.

                    In particular, render returns a React element, which is a lightweight description of what to render.

                    Most React developers use a special syntax called “JSX” which makes these structures easier to write.

                    The div syntax is transformed at build time to React.createElement('div').

                    The example above is equivalent to:

                    See full expanded version.

                    If you’re curious, createElement() is described in more detail in the API reference,
                    but we won’t be using it in this tutorial.

                    Instead, we will keep using JSX.

                    JSX comes with the full power of JavaScript. You can put any JavaScript expressions within braces inside JSX.

                    Each React element is a JavaScript object that you can store in a variable or pass around in your program.

                    The ShoppingList component above only renders built-in DOM components like and .

                    But you can compose and render custom React components too.

                    For example, we can now refer to the whole shopping list by writing ShoppingList.

                    Each React component is encapsulated and can operate independently;
                    this allows you to build complex UIs from simple components.

                    Inspecting the Starter Code

                    If you’re going to work on the tutorial in your browser, open this code in a new tab: Starter Code.

                    If you’re going to work on the tutorial locally, instead open src/index.js in your project folder (you have already touched this file during the setup).

                    This Starter Code is the base of what we’re building. We’ve provided the CSS styling so that you only need to focus on learning React and programming the tic-tac-toe game.

                    By inspecting the code, you’ll notice that we have three React components:

                    Square
                    Board
                    Game
                    The Square component renders a single and the Board renders 9 squares.

                    The Game component renders a board with placeholder values which we’ll modify later.

                    There are currently no interactive components.

                    Passing Data Through Props
                    To get our feet wet, let’s try passing some data from our Board component to our Square component.

                    We strongly recommend typing code by hand as you’re working through the tutorial and not using copy/paste.

                    This will help you develop muscle memory and a stronger understanding.

                    In Board’s renderSquare method, change the code to pass a prop called value to the Square:
                </p>

                <p>What Are We Building?
                    In this tutorial, we’ll show how to build an interactive tic-tac-toe game with React.

                    You can see what we’ll be building here: Final Result.

                    If the code doesn’t make sense to you, or if you are unfamiliar with the code’s syntax, don’t worry!

                    The goal of this tutorial is to help you understand React and its syntax.

                    We recommend that you check out the tic-tac-toe game before continuing with the tutorial.

                    One of the features that you’ll notice is that there is a numbered list to the right of the game’s board.

                    This list gives you a history of all of the moves that have occurred in the game, and it is updated as the game progresses.

                    You can close the tic-tac-toe game once you’re familiar with it. We’ll be starting from a simpler template in this tutorial.

                    Our next step is to set you up so that you can start building the game.

                    Prerequisites
                    We’ll assume that you have some familiarity with HTML and JavaScript,
                    but you should be able to follow along even if you’re coming from a different programming language.

                    We’ll also assume that you’re familiar with programming concepts like functions, objects, arrays, and to a lesser extent, classes.

                    If you need to review JavaScript, we recommend reading this guide.

                    Note that we’re also using some features from ES6 — a recent version of JavaScript. In this tutorial, we’re using arrow functions, classes, let, and const statements.

                    You can use the Babel REPL to check what ES6 code compiles to.

                    Setup for the Tutorial
                    There are two ways to complete this tutorial:
                    you can either write the code in your browser, or you can set up a local development environment on your computer.

                    Setup Option 1: Write Code in the Browser
                    This is the quickest way to get started!

                    First, open this Starter Code in a new tab.

                    The new tab should display an empty tic-tac-toe game board and React code. We will be editing the React code in this tutorial.

                    You can now skip the second setup option, and go to the Overview section to get an overview of React.

                    Setup Option 2: Local Development Environment
                    This is completely optional and not required for this tutorial!


                    Optional: Instructions for following along locally using your preferred text editor
                    Help, I’m Stuck!
                    If you get stuck, check out the community support resources.

                    In particular, Reactiflux Chat is a great way to get help quickly.

                    If you don’t receive an answer, or if you remain stuck,
                    please file an issue, and we’ll help you out.

                    Overview
                    Now that you’re set up, let’s get an overview of React!

                    What Is React?
                    React is a declarative, efficient, and flexible JavaScript library for building user interfaces.

                    It lets you compose complex UIs from small and isolated pieces of code called “components”.

                    React has a few different kinds of components, but we’ll start with React.Component subclasses:

                    We’ll get to the funny XML-like tags soon. We use components to tell React what we want to see on the screen.

                    When our data changes, React will efficiently update and re-render our components.

                    Here, ShoppingList is a React component class, or React component type. A component takes in parameters,
                    called props (short for “properties”), and returns a hierarchy of views to display via the render method.

                    The render method returns a description of what you want to see on the screen.

                    React takes the description and displays the result.

                    In particular, render returns a React element, which is a lightweight description of what to render.

                    Most React developers use a special syntax called “JSX” which makes these structures easier to write.

                    The div syntax is transformed at build time to React.createElement('div').

                    The example above is equivalent to:

                    See full expanded version.

                    If you’re curious, createElement() is described in more detail in the API reference,
                    but we won’t be using it in this tutorial.

                    Instead, we will keep using JSX.

                    JSX comes with the full power of JavaScript. You can put any JavaScript expressions within braces inside JSX.

                    Each React element is a JavaScript object that you can store in a variable or pass around in your program.

                    The ShoppingList component above only renders built-in DOM components like and .

                    But you can compose and render custom React components too.

                    For example, we can now refer to the whole shopping list by writing ShoppingList.

                    Each React component is encapsulated and can operate independently;
                    this allows you to build complex UIs from simple components.

                    Inspecting the Starter Code

                    If you’re going to work on the tutorial in your browser, open this code in a new tab: Starter Code.

                    If you’re going to work on the tutorial locally, instead open src/index.js in your project folder (you have already touched this file during the setup).

                    This Starter Code is the base of what we’re building. We’ve provided the CSS styling so that you only need to focus on learning React and programming the tic-tac-toe game.

                    By inspecting the code, you’ll notice that we have three React components:

                    Square
                    Board
                    Game
                    The Square component renders a single and the Board renders 9 squares.

                    The Game component renders a board with placeholder values which we’ll modify later.

                    There are currently no interactive components.

                    Passing Data Through Props
                    To get our feet wet, let’s try passing some data from our Board component to our Square component.

                    We strongly recommend typing code by hand as you’re working through the tutorial and not using copy/paste.

                    This will help you develop muscle memory and a stronger understanding.

                    In Board’s renderSquare method, change the code to pass a prop called value to the Square:
                </p>

                <p>What Are We Building?
                    In this tutorial, we’ll show how to build an interactive tic-tac-toe game with React.

                    You can see what we’ll be building here: Final Result.

                    If the code doesn’t make sense to you, or if you are unfamiliar with the code’s syntax, don’t worry!

                    The goal of this tutorial is to help you understand React and its syntax.

                    We recommend that you check out the tic-tac-toe game before continuing with the tutorial.

                    One of the features that you’ll notice is that there is a numbered list to the right of the game’s board.

                    This list gives you a history of all of the moves that have occurred in the game, and it is updated as the game progresses.

                    You can close the tic-tac-toe game once you’re familiar with it. We’ll be starting from a simpler template in this tutorial.

                    Our next step is to set you up so that you can start building the game.

                    Prerequisites
                    We’ll assume that you have some familiarity with HTML and JavaScript,
                    but you should be able to follow along even if you’re coming from a different programming language.

                    We’ll also assume that you’re familiar with programming concepts like functions, objects, arrays, and to a lesser extent, classes.

                    If you need to review JavaScript, we recommend reading this guide.

                    Note that we’re also using some features from ES6 — a recent version of JavaScript. In this tutorial, we’re using arrow functions, classes, let, and const statements.

                    You can use the Babel REPL to check what ES6 code compiles to.

                    Setup for the Tutorial
                    There are two ways to complete this tutorial:
                    you can either write the code in your browser, or you can set up a local development environment on your computer.

                    Setup Option 1: Write Code in the Browser
                    This is the quickest way to get started!

                    First, open this Starter Code in a new tab.

                    The new tab should display an empty tic-tac-toe game board and React code. We will be editing the React code in this tutorial.

                    You can now skip the second setup option, and go to the Overview section to get an overview of React.

                    Setup Option 2: Local Development Environment
                    This is completely optional and not required for this tutorial!


                    Optional: Instructions for following along locally using your preferred text editor
                    Help, I’m Stuck!
                    If you get stuck, check out the community support resources.

                    In particular, Reactiflux Chat is a great way to get help quickly.

                    If you don’t receive an answer, or if you remain stuck,
                    please file an issue, and we’ll help you out.

                    Overview
                    Now that you’re set up, let’s get an overview of React!

                    What Is React?
                    React is a declarative, efficient, and flexible JavaScript library for building user interfaces.

                    It lets you compose complex UIs from small and isolated pieces of code called “components”.

                    React has a few different kinds of components, but we’ll start with React.Component subclasses:

                    We’ll get to the funny XML-like tags soon. We use components to tell React what we want to see on the screen.

                    When our data changes, React will efficiently update and re-render our components.

                    Here, ShoppingList is a React component class, or React component type. A component takes in parameters,
                    called props (short for “properties”), and returns a hierarchy of views to display via the render method.

                    The render method returns a description of what you want to see on the screen.

                    React takes the description and displays the result.

                    In particular, render returns a React element, which is a lightweight description of what to render.

                    Most React developers use a special syntax called “JSX” which makes these structures easier to write.

                    The div syntax is transformed at build time to React.createElement('div').

                    The example above is equivalent to:

                    See full expanded version.

                    If you’re curious, createElement() is described in more detail in the API reference,
                    but we won’t be using it in this tutorial.

                    Instead, we will keep using JSX.

                    JSX comes with the full power of JavaScript. You can put any JavaScript expressions within braces inside JSX.

                    Each React element is a JavaScript object that you can store in a variable or pass around in your program.

                    The ShoppingList component above only renders built-in DOM components like and .

                    But you can compose and render custom React components too.

                    For example, we can now refer to the whole shopping list by writing ShoppingList.

                    Each React component is encapsulated and can operate independently;
                    this allows you to build complex UIs from simple components.

                    Inspecting the Starter Code

                    If you’re going to work on the tutorial in your browser, open this code in a new tab: Starter Code.

                    If you’re going to work on the tutorial locally, instead open src/index.js in your project folder (you have already touched this file during the setup).

                    This Starter Code is the base of what we’re building. We’ve provided the CSS styling so that you only need to focus on learning React and programming the tic-tac-toe game.

                    By inspecting the code, you’ll notice that we have three React components:

                    Square
                    Board
                    Game
                    The Square component renders a single and the Board renders 9 squares.

                    The Game component renders a board with placeholder values which we’ll modify later.

                    There are currently no interactive components.

                    Passing Data Through Props
                    To get our feet wet, let’s try passing some data from our Board component to our Square component.

                    We strongly recommend typing code by hand as you’re working through the tutorial and not using copy/paste.

                    This will help you develop muscle memory and a stronger understanding.

                    In Board’s renderSquare method, change the code to pass a prop called value to the Square:
                </p>

                <p>What Are We Building?
                    In this tutorial, we’ll show how to build an interactive tic-tac-toe game with React.

                    You can see what we’ll be building here: Final Result.

                    If the code doesn’t make sense to you, or if you are unfamiliar with the code’s syntax, don’t worry!

                    The goal of this tutorial is to help you understand React and its syntax.

                    We recommend that you check out the tic-tac-toe game before continuing with the tutorial.

                    One of the features that you’ll notice is that there is a numbered list to the right of the game’s board.

                    This list gives you a history of all of the moves that have occurred in the game, and it is updated as the game progresses.

                    You can close the tic-tac-toe game once you’re familiar with it. We’ll be starting from a simpler template in this tutorial.

                    Our next step is to set you up so that you can start building the game.

                    Prerequisites
                    We’ll assume that you have some familiarity with HTML and JavaScript,
                    but you should be able to follow along even if you’re coming from a different programming language.

                    We’ll also assume that you’re familiar with programming concepts like functions, objects, arrays, and to a lesser extent, classes.

                    If you need to review JavaScript, we recommend reading this guide.

                    Note that we’re also using some features from ES6 — a recent version of JavaScript. In this tutorial, we’re using arrow functions, classes, let, and const statements.

                    You can use the Babel REPL to check what ES6 code compiles to.

                    Setup for the Tutorial
                    There are two ways to complete this tutorial:
                    you can either write the code in your browser, or you can set up a local development environment on your computer.

                    Setup Option 1: Write Code in the Browser
                    This is the quickest way to get started!

                    First, open this Starter Code in a new tab.

                    The new tab should display an empty tic-tac-toe game board and React code. We will be editing the React code in this tutorial.

                    You can now skip the second setup option, and go to the Overview section to get an overview of React.

                    Setup Option 2: Local Development Environment
                    This is completely optional and not required for this tutorial!


                    Optional: Instructions for following along locally using your preferred text editor
                    Help, I’m Stuck!
                    If you get stuck, check out the community support resources.

                    In particular, Reactiflux Chat is a great way to get help quickly.

                    If you don’t receive an answer, or if you remain stuck,
                    please file an issue, and we’ll help you out.

                    Overview
                    Now that you’re set up, let’s get an overview of React!

                    What Is React?
                    React is a declarative, efficient, and flexible JavaScript library for building user interfaces.

                    It lets you compose complex UIs from small and isolated pieces of code called “components”.

                    React has a few different kinds of components, but we’ll start with React.Component subclasses:

                    We’ll get to the funny XML-like tags soon. We use components to tell React what we want to see on the screen.

                    When our data changes, React will efficiently update and re-render our components.

                    Here, ShoppingList is a React component class, or React component type. A component takes in parameters,
                    called props (short for “properties”), and returns a hierarchy of views to display via the render method.

                    The render method returns a description of what you want to see on the screen.

                    React takes the description and displays the result.

                    In particular, render returns a React element, which is a lightweight description of what to render.

                    Most React developers use a special syntax called “JSX” which makes these structures easier to write.

                    The div syntax is transformed at build time to React.createElement('div').

                    The example above is equivalent to:

                    See full expanded version.

                    If you’re curious, createElement() is described in more detail in the API reference,
                    but we won’t be using it in this tutorial.

                    Instead, we will keep using JSX.

                    JSX comes with the full power of JavaScript. You can put any JavaScript expressions within braces inside JSX.

                    Each React element is a JavaScript object that you can store in a variable or pass around in your program.

                    The ShoppingList component above only renders built-in DOM components like and .

                    But you can compose and render custom React components too.

                    For example, we can now refer to the whole shopping list by writing ShoppingList.

                    Each React component is encapsulated and can operate independently;
                    this allows you to build complex UIs from simple components.

                    Inspecting the Starter Code

                    If you’re going to work on the tutorial in your browser, open this code in a new tab: Starter Code.

                    If you’re going to work on the tutorial locally, instead open src/index.js in your project folder (you have already touched this file during the setup).

                    This Starter Code is the base of what we’re building. We’ve provided the CSS styling so that you only need to focus on learning React and programming the tic-tac-toe game.

                    By inspecting the code, you’ll notice that we have three React components:

                    Square
                    Board
                    Game
                    The Square component renders a single and the Board renders 9 squares.

                    The Game component renders a board with placeholder values which we’ll modify later.

                    There are currently no interactive components.

                    Passing Data Through Props
                    To get our feet wet, let’s try passing some data from our Board component to our Square component.

                    We strongly recommend typing code by hand as you’re working through the tutorial and not using copy/paste.

                    This will help you develop muscle memory and a stronger understanding.

                    In Board’s renderSquare method, change the code to pass a prop called value to the Square:
                </p>

                <p>What Are We Building?
                    In this tutorial, we’ll show how to build an interactive tic-tac-toe game with React.

                    You can see what we’ll be building here: Final Result.

                    If the code doesn’t make sense to you, or if you are unfamiliar with the code’s syntax, don’t worry!

                    The goal of this tutorial is to help you understand React and its syntax.

                    We recommend that you check out the tic-tac-toe game before continuing with the tutorial.

                    One of the features that you’ll notice is that there is a numbered list to the right of the game’s board.

                    This list gives you a history of all of the moves that have occurred in the game, and it is updated as the game progresses.

                    You can close the tic-tac-toe game once you’re familiar with it. We’ll be starting from a simpler template in this tutorial.

                    Our next step is to set you up so that you can start building the game.

                    Prerequisites
                    We’ll assume that you have some familiarity with HTML and JavaScript,
                    but you should be able to follow along even if you’re coming from a different programming language.

                    We’ll also assume that you’re familiar with programming concepts like functions, objects, arrays, and to a lesser extent, classes.

                    If you need to review JavaScript, we recommend reading this guide.

                    Note that we’re also using some features from ES6 — a recent version of JavaScript. In this tutorial, we’re using arrow functions, classes, let, and const statements.

                    You can use the Babel REPL to check what ES6 code compiles to.

                    Setup for the Tutorial
                    There are two ways to complete this tutorial:
                    you can either write the code in your browser, or you can set up a local development environment on your computer.

                    Setup Option 1: Write Code in the Browser
                    This is the quickest way to get started!

                    First, open this Starter Code in a new tab.

                    The new tab should display an empty tic-tac-toe game board and React code. We will be editing the React code in this tutorial.

                    You can now skip the second setup option, and go to the Overview section to get an overview of React.

                    Setup Option 2: Local Development Environment
                    This is completely optional and not required for this tutorial!


                    Optional: Instructions for following along locally using your preferred text editor
                    Help, I’m Stuck!
                    If you get stuck, check out the community support resources.

                    In particular, Reactiflux Chat is a great way to get help quickly.

                    If you don’t receive an answer, or if you remain stuck,
                    please file an issue, and we’ll help you out.

                    Overview
                    Now that you’re set up, let’s get an overview of React!

                    What Is React?
                    React is a declarative, efficient, and flexible JavaScript library for building user interfaces.

                    It lets you compose complex UIs from small and isolated pieces of code called “components”.

                    React has a few different kinds of components, but we’ll start with React.Component subclasses:

                    We’ll get to the funny XML-like tags soon. We use components to tell React what we want to see on the screen.

                    When our data changes, React will efficiently update and re-render our components.

                    Here, ShoppingList is a React component class, or React component type. A component takes in parameters,
                    called props (short for “properties”), and returns a hierarchy of views to display via the render method.

                    The render method returns a description of what you want to see on the screen.

                    React takes the description and displays the result.

                    In particular, render returns a React element, which is a lightweight description of what to render.

                    Most React developers use a special syntax called “JSX” which makes these structures easier to write.

                    The div syntax is transformed at build time to React.createElement('div').

                    The example above is equivalent to:

                    See full expanded version.

                    If you’re curious, createElement() is described in more detail in the API reference,
                    but we won’t be using it in this tutorial.

                    Instead, we will keep using JSX.

                    JSX comes with the full power of JavaScript. You can put any JavaScript expressions within braces inside JSX.

                    Each React element is a JavaScript object that you can store in a variable or pass around in your program.

                    The ShoppingList component above only renders built-in DOM components like and .

                    But you can compose and render custom React components too.

                    For example, we can now refer to the whole shopping list by writing ShoppingList.

                    Each React component is encapsulated and can operate independently;
                    this allows you to build complex UIs from simple components.

                    Inspecting the Starter Code

                    If you’re going to work on the tutorial in your browser, open this code in a new tab: Starter Code.

                    If you’re going to work on the tutorial locally, instead open src/index.js in your project folder (you have already touched this file during the setup).

                    This Starter Code is the base of what we’re building. We’ve provided the CSS styling so that you only need to focus on learning React and programming the tic-tac-toe game.

                    By inspecting the code, you’ll notice that we have three React components:

                    Square
                    Board
                    Game
                    The Square component renders a single and the Board renders 9 squares.

                    The Game component renders a board with placeholder values which we’ll modify later.

                    There are currently no interactive components.

                    Passing Data Through Props
                    To get our feet wet, let’s try passing some data from our Board component to our Square component.

                    We strongly recommend typing code by hand as you’re working through the tutorial and not using copy/paste.

                    This will help you develop muscle memory and a stronger understanding.

                    In Board’s renderSquare method, change the code to pass a prop called value to the Square:
                </p>
            </div>
        </>
    )
}