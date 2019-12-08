OUT=${PWD}/build/function.zip

pushd src

zip -9 $OUT *.py
zip -9 $OUT *.json

popd

aws lambda update-function-code --function-name RetirefreeAPI --zip-file fileb://build/function.zip
