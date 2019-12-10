OUT=${PWD}/build/function.zip
ZIP="zip -9 -r --exclude=*__pycache__/*"

pushd src

$ZIP -9 $OUT *.py
$ZIP -9 $OUT *.json
$ZIP -9 $OUT token.pickle

popd

pushd rtfvenv/lib/python3.7/site-packages/

$ZIP $OUT *

popd

aws lambda update-function-code --function-name RetirefreeAPI --zip-file fileb://build/function.zip
