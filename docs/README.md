
<center>
	<img width="200" height="auto" src='./img/logo.png' />
</center>



<br>


# JSS (JAVASCRIPT STYLE SHEET)

A simple javascript library that allows you to change the style of elements 



### How to use






> Syntax

```javascript 
jss('element',{property1 : 'value1',property2 : 'value2',...});

///[Alert!] please use the camelcase for property name
/// it means that you need to use backgroundColor instead of background-color
/// [examples]
//// borderRadius instead of border-radius
//// paddingBottom instead of padding-bottom


```

## Normal Code

```javascript
let div = document.querySelector('div')
div.style.display = 'block'
div.style.backgroundColor = 'red'
````


## With JSS 

```javascript

jss('div',{display:'block' , backgroundColor:'red'})
```


> More Examples

```javascript 
jss('h1',{color : 'green',fontFamily : 'poppins',fontSize:'30px'});

jss(
	'button',
	{
		color : 'black',
		padding:'15px 20px'
	}
	);

```



























