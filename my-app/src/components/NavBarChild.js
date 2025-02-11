import React from 'react'

function NavBarChild(props) {
  return (
    <div>
        {props.isLoggedIn ? (
            <>
                <form>
                    <label htmlFor='username'>Username: </label>
                    <input type='text' name='username' id='username' placeholder='Username' />
                    <label htmlFor='password'>Password: </label>
                    <input type='password' name='password' id='password' placeholder='Password' />
                </form>
                <button onClick={() => props.handleClick()}>Submit</button>
            </>
        ) : (
            <button onClick={() => props.handleClick()}>log in</button>
        )}
    </div>
  )
}

export default NavBarChild