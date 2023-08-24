# Course Notes

Typescript is created at Microsoft used to address the shortcommings of Javascript 

TS: Adds these features 
- Static Typing --> important one
- Code completion 
- Refactoring 
- Shorthand notations



Static Means that variables are noticed at compile time. Like no "Hoisting"  -- C++, C#, JAVA -- type is determined
Dynamic Means that variablles are noticed at runtime , and can change soo there is "Hoisting"  -- JS, Python, Ruby -- type is not determined 

# Typesctipt is basically js with typecheking


# Drawbacks of Typescripts :  
Compilations -- we have to give our TS file to compiler , we call this Transpilation  
Disciplined in coding 


# Get Typescript version 
`tsc -v` in cmd 
# compile ts 
`index.ts 'File'` in cmd to compile it to js


# ts Config  `tsc --init`

- target 
- module 
- rootDir 
- outDir 
- removeComments 
- noEmitOnError
- sourceMap


# Debugging 
- add a breakpoint 
- go to debug panel and click `create a launch.json file`
- instantiate launch.json and add this underneath program `"preLaunchTask": "tsc: build - tsconfig.json",` 
- then start debugging 