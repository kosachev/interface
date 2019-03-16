Работа с GIT 

1. Открываем терминал
2. Переходим в папку с проектом 
3. Инициализируем - 


…or create a new repository on the command line
echo "# testgit" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/kosachev/testgit.git
git push -u origin master

…or push an existing repository from the command line
git remote add origin https://github.com/kosachev/testgit.git
git push -u origin master