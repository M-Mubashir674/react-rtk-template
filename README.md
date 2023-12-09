# React + Vite
	This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

# Template
	This templates using rtk query and react toastify for showing messages to user.


# Import rules
1. Path to import file starts with "src/***"
2. Import icons in icons.js and export from there only
3. Always import svgs as ReactComponent (Don't use src in image tag to load svg)
4. Import always in following sequence
	-React bultin imports (useState,useEffect)
	-Third party imports {Redux, Icons, Toastify}
	-React Application Custom Components
	-Mutations and api functions imports 
	-Styles imports (css,scss)

# Instructions
	Don't use px for font size, width, height, padding, margin always use rem or em.
	Media queries are in index.css file you can adjust as per your needs.
	If code snippet repeats itself more than once then better to convert it into component.
	Lift the component in common if you feel it's general component like tables, inputs, cards etc
	Always make folder if you make a component and folder contains the component file and it's design file (Component.jsx, component.scss)
	Always move common functions in utils folder
	Boolean variables must have "is" in start like "isLoading,isSuccess"
	
	

	
	