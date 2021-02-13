/* eslint-disable no-template-curly-in-string */
import type { AWS } from '@serverless/typescript';

const serverlessConfiguration: AWS = {
  service: 'motor-control-service',
  frameworkVersion: '2',
  package: {
    excludeDevDependencies: true,
    individually: true,
  },
  custom: {
    webpack: {
      webpackConfig: './webpack.config.js',
      includeModules: true,
    },
  },
  plugins: [
    'serverless-webpack',
    'serverless-offline',
    'serverless-dotenv-plugin',
  ],
  provider: {
    name: 'aws',
    apiName: 'motor-control',
    runtime: 'nodejs12.x',
    stage: "${env:STAGE, 'dev'}",
    memorySize: 128,
    logRetentionInDays: 3,
    apiKeys: [
      {
        name: 'Chave de API',
        value: 'TT0cjlXp1EqFhCqZGFv1VofETiY4lSnpm8Sxa0GSWFoM04Ud',
      },
    ],
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
    },
  },
  functions: {
    api: {
      handler: 'src/server.handler',
      role: 'LambdaRole',
      events: [
        {
          http: {
            method: 'get',
            path: 'boards/list',
            private: true,
          },
        },
        {
          http: {
            method: 'post',
            path: 'boards/create',
            private: true,
          },
        },
        {
          http: {
            method: 'get',
            path: 'motors/list',
            private: true,
          },
        },
        {
          http: {
            method: 'post',
            path: 'motors/create',
            private: true,
          },
        },
      ],
    },
  },
  resources: {
    Resources: {
      LambdaRole: {
        Type: 'AWS::IAM::Role',
        Properties: {
          RoleName: 'MotorControlService',
          AssumeRolePolicyDocument: {
            Version: '2012-10-17',
            Statement: {
              Effect: 'Allow',
              Principal: {
                Service: ['lambda.amazonaws.com'],
              },
              Action: 'sts:AssumeRole',
            },
          },
          Policies: [
            {
              PolicyName: 'motor-control-service',
              PolicyDocument: {
                Version: '2012-10-17',
                Statement: [
                  {
                    Effect: 'Allow',
                    Action: [
                      'logs:createLogGroup',
                      'logs:createLogStream',
                      'logs:putLogEvents',
                    ],
                    Resource: 'arn:aws:logs:${self:provider.region}:*:*:*:*',
                  },
                  {
                    Effect: 'Allow',
                    Action: [
                      'dynamodb:GetItem',
                      'dynamodb:PutItem',
                      'dynamodb:Scan',
                      'dynamodb:UpdateItem',
                      'dynamodb:CreateTable',
                      'dynamodb:DescribeTable',
                      'dynamodb:DeleteItem',
                      'dynamodb:Query',
                    ],
                    Resource:
                      'arn:aws:dynamodb:${self:provider.region}:*:table/Boards',
                  },
                  {
                    Effect: 'Allow',
                    Action: [
                      'dynamodb:GetItem',
                      'dynamodb:PutItem',
                      'dynamodb:Scan',
                      'dynamodb:UpdateItem',
                      'dynamodb:CreateTable',
                      'dynamodb:DescribeTable',
                      'dynamodb:DeleteItem',
                      'dynamodb:Query',
                    ],
                    Resource:
                      'arn:aws:dynamodb:${self:provider.region}:*:table/Motors',
                  },
                  {
                    Effect: 'Allow',
                    Action: [
                      'xray:PutTraceSegments',
                      'xray:PutTelemetryRecords',
                    ],
                    Resource: '*',
                  },
                ],
              },
            },
          ],
        },
      },
    },
  },
};

module.exports = serverlessConfiguration;
