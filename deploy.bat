set e-

npm run build

cd dist

git init
git add -A
git commit -m 'New Deployment'
git push -f git@github.com:Shemmy3/MNotes.git master:gh-pages

cd -