import React from 'react';

class App extends React.Component{
    render(){
        var i = 1;

        var myStyle = {
            fontSize: 100,
            color: '#FF0000'
        }

        return (
            <div>
                {/* Nested Elements */}
                <h1>Header</h1>
                <h2>Content</h2>

                {/* custom attribute */}
                <p data-myattribute="somevalue">This is the content!!</p>
                
                {/* JavaScript expressions */}
                <h1>{1+1}</h1>

                {/* One cannot use if else statements inside JSX, instead we can use conditional(ternary) expressions */}
                <h1>{i == 1 ? 'True!':'False'}</h1>

                <h1 style={myStyle}>Stylized Header</h1>
            </div>
        );
    }
}

export default App;