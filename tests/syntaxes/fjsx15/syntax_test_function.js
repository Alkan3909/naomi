// SYNTAX TEST "Packages/Naomi/syntaxes/naomi.fjsx15.sublime-syntax"

// Licensed under the Apache License, Version 2.0 (the “License”); you may not
// use this file except in compliance with the License. You may obtain a copy of
// the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an “AS IS” BASIS, WITHOUT
// WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
// License for the specific language governing permissions and limitations under
// the License.

   function foo() {}
// ^^^^^^^^^^^^^^ .meta.function.declaration.js.fjsx15
// ^^^^^^^^ .keyword.declaration.function.js.fjsx15
//          ^^^ .entity.name.function.js.fjsx15
//             ^ .punctuation.definition.function.parameters.begin.js.fjsx15
//              ^ .punctuation.definition.function.parameters.end.js.fjsx15
//                ^ .punctuation.definition.function.body.begin.js.fjsx15
//                 ^ .punctuation.definition.function.body.end.js.fjsx15
   function *foo() {}
// ^^^^^^^^^^^^^^^ .meta.function.declaration.js.fjsx15
// ^^^^^^^^ .keyword.declaration.function.js.fjsx15
//          ^ .storage.modifier.js.fjsx15
//          ^ .keyword.operator.other.generator.js.fjsx15
//           ^^^ .entity.name.function.js.fjsx15
//              ^ .punctuation.definition.function.parameters.begin.js.fjsx15
//               ^ .punctuation.definition.function.parameters.end.js.fjsx15
//                 ^ .punctuation.definition.function.body.begin.js.fjsx15
//                  ^ .punctuation.definition.function.body.end.js.fjsx15
   function foo(param, ...param) {}
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ .meta.function.declaration.js.fjsx15
// ^^^^^^^^ .keyword.declaration.function.js.fjsx15
//          ^^^ .entity.name.function.js.fjsx15
//             ^ .punctuation.definition.function.parameters.begin.js.fjsx15
//              ^^^^^ .entity.name.variable.js.fjsx15
//                   ^ .punctuation.definition.function.parameters.js.fjsx15
//                     ^^^ .keyword.operator.other.rest.js.fjsx15
//                        ^^^^^ .entity.name.variable.js.fjsx15
//                             ^ .punctuation.definition.function.parameters.end.js.fjsx15
//                               ^ .punctuation.definition.function.body.begin.js.fjsx15
//                                ^ .punctuation.definition.function.body.end.js.fjsx15
   function *foo(param, ...param) {}
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ .meta.function.declaration.js.fjsx15
// ^^^^^^^^ .keyword.declaration.function.js.fjsx15
//          ^ .storage.modifier.js.fjsx15
//          ^ .keyword.operator.other.generator.js.fjsx15
//           ^^^ .entity.name.function.js.fjsx15
//              ^ .punctuation.definition.function.parameters.begin.js.fjsx15
//               ^^^^^ .entity.name.variable.js.fjsx15
//                    ^ .punctuation.definition.function.parameters.js.fjsx15
//                      ^^^ .keyword.operator.other.rest.js.fjsx15
//                         ^^^^^ .entity.name.variable.js.fjsx15
//                              ^ .punctuation.definition.function.parameters.end.js.fjsx15
//                                ^ .punctuation.definition.function.body.begin.js.fjsx15
//                                 ^ .punctuation.definition.function.body.end.js.fjsx15
   function foo(param:number, ...param:string):boolean {}
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ .meta.function.declaration.js.fjsx15
// ^^^^^^^^ .keyword.declaration.function.js.fjsx15
//          ^^^ .entity.name.function.js.fjsx15
//             ^ .punctuation.definition.function.parameters.begin.js.fjsx15
//              ^^^^^ .entity.name.variable.js.fjsx15
//                   ^ .keyword.operator.other.association.flowtype
//                    ^^^^^^ .support.flowtype
//                    ^^^^^^ .entity.name.type.flowtype
//                          ^ .punctuation.definition.function.parameters.js.fjsx15
//                            ^^^ .keyword.operator.other.rest.js.fjsx15
//                               ^^^^^ .entity.name.variable.js.fjsx15
//                                    ^ .keyword.operator.other.association.flowtype
//                                     ^^^^^^ .support.flowtype
//                                     ^^^^^^ .entity.name.type.flowtype
//                                           ^ .punctuation.definition.function.parameters.end.js.fjsx15
//                                            ^ .keyword.operator.other.association.flowtype
//                                             ^^^^^^^ .support.flowtype
//                                             ^^^^^^^ .entity.name.type.flowtype
//                                                     ^ .punctuation.definition.function.body.begin.js.fjsx15
//                                                      ^ .punctuation.definition.function.body.end.js.fjsx15
   function foo(param:?number, ...param:?(string|number)):?boolean {}
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ .meta.function.declaration.js.fjsx15
// ^^^^^^^^ .keyword.declaration.function.js.fjsx15
//          ^^^ .entity.name.function.js.fjsx15
//             ^ .punctuation.definition.function.parameters.begin.js.fjsx15
//              ^^^^^ .entity.name.variable.js.fjsx15
//                   ^ .keyword.operator.other.association.flowtype
//                    ^ .keyword.operator.other.nullable.flowtype
//                     ^^^^^^ .support.flowtype
//                     ^^^^^^ .entity.name.type.flowtype
//                           ^ .punctuation.definition.function.parameters.js.fjsx15
//                             ^^^ .keyword.operator.other.rest.js.fjsx15
//                                ^^^^^ .entity.name.variable.js.fjsx15
//                                     ^ .keyword.operator.other.association.flowtype
//                                      ^ .keyword.operator.other.nullable.flowtype
//                                       ^ .punctuation.definition.expression.group.begin.flowtype
//                                        ^^^^^^ .support.flowtype
//                                        ^^^^^^ .entity.name.type.flowtype
//                                              ^ .keyword.operator.other.union.flowtype
//                                               ^^^^^^ .support.flowtype
//                                               ^^^^^^ .entity.name.type.flowtype
//                                                     ^ .punctuation.definition.expression.group.end.flowtype
//                                                      ^ .punctuation.definition.function.parameters.end.js.fjsx15
//                                                       ^ .keyword.operator.other.association.flowtype
//                                                        ^ .keyword.operator.other.nullable.flowtype
//                                                         ^^^^^^^ .support.flowtype
//                                                         ^^^^^^^ .entity.name.type.flowtype
//                                                                 ^ .punctuation.definition.function.body.begin.js.fjsx15
//                                                                  ^ .punctuation.definition.function.body.end.js.fjsx15
   function foo<A,B>(param:A, ...param:B):B {}
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ .meta.function.declaration.js.fjsx15
// ^^^^^^^^ .keyword.declaration.function.js.fjsx15
//          ^^^ .entity.name.function.js.fjsx15
//             ^ .punctuation.definition.template.parameters.begin.flowtype
//              ^ .entity.name.type.flowtype
//               ^ .punctuation.definition.template.parameters.flowtype
//                ^ .entity.name.type.flowtype
//                 ^ .punctuation.definition.template.parameters.end.flowtype
//                  ^ .punctuation.definition.function.parameters.begin.js.fjsx15
//                   ^^^^^ .entity.name.variable.js.fjsx15
//                        ^ .keyword.operator.other.association.flowtype
//                         ^ .entity.name.type.flowtype
//                          ^ .punctuation.definition.function.parameters.js.fjsx15
//                            ^^^ .keyword.operator.other.rest.js.fjsx15
//                               ^^^^^ .entity.name.variable.js.fjsx15
//                                    ^ .keyword.operator.other.association.flowtype
//                                     ^ .entity.name.type.flowtype
//                                      ^ .punctuation.definition.function.parameters.end.js.fjsx15
//                                       ^ .keyword.operator.other.association.flowtype
//                                        ^ .entity.name.type.flowtype
//                                          ^ .punctuation.definition.function.body.begin.js.fjsx15
//                                           ^ .punctuation.definition.function.body.end.js.fjsx15
   function *foo<A,B>(param:A, ...param:B):B {}
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ .meta.function.declaration.js.fjsx15
// ^^^^^^^^ .keyword.declaration.function.js.fjsx15
//          ^ .storage.modifier.js.fjsx15
//          ^ .keyword.operator.other.generator.js.fjsx15
//           ^^^ .entity.name.function.js.fjsx15
//              ^ .punctuation.definition.template.parameters.begin.flowtype
//               ^ .entity.name.type.flowtype
//                ^ .punctuation.definition.template.parameters.flowtype
//                 ^ .entity.name.type.flowtype
//                  ^ .punctuation.definition.template.parameters.end.flowtype
//                   ^ .punctuation.definition.function.parameters.begin.js.fjsx15
//                    ^^^^^ .entity.name.variable.js.fjsx15
//                         ^ .keyword.operator.other.association.flowtype
//                          ^ .entity.name.type.flowtype
//                           ^ .punctuation.definition.function.parameters.js.fjsx15
//                             ^^^ .keyword.operator.other.rest.js.fjsx15
//                                ^^^^^ .entity.name.variable.js.fjsx15
//                                     ^ .keyword.operator.other.association.flowtype
//                                      ^ .entity.name.type.flowtype
//                                       ^ .punctuation.definition.function.parameters.end.js.fjsx15
//                                        ^ .keyword.operator.other.association.flowtype
//                                         ^ .entity.name.type.flowtype
//                                           ^ .punctuation.definition.function.body.begin.js.fjsx15
//                                            ^ .punctuation.definition.function.body.end.js.fjsx15
   function () {}
// ^^^^^^^^^^^ .meta.function.declaration.js.fjsx15
// ^^^^^^^^ .keyword.declaration.function.js.fjsx15
//          ^ .punctuation.definition.function.parameters.begin.js.fjsx15
//           ^ .punctuation.definition.function.parameters.end.js.fjsx15
//             ^ .punctuation.definition.function.body.begin.js.fjsx15
//              ^ .punctuation.definition.function.body.end.js.fjsx15
   function *() {}
// ^^^^^^^^^^^^ .meta.function.declaration.js.fjsx15
// ^^^^^^^^ .keyword.declaration.function.js.fjsx15
//          ^ .storage.modifier.js.fjsx15
//          ^ .keyword.operator.other.generator.js.fjsx15
//           ^ .punctuation.definition.function.parameters.begin.js.fjsx15
//            ^ .punctuation.definition.function.parameters.end.js.fjsx15
//              ^ .punctuation.definition.function.body.begin.js.fjsx15
//               ^ .punctuation.definition.function.body.end.js.fjsx15
   function *<A,B>(param:A, ...param:B):B {}
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ .meta.function.declaration.js.fjsx15
// ^^^^^^^^ .keyword.declaration.function.js.fjsx15
//          ^ .storage.modifier.js.fjsx15
//          ^ .keyword.operator.other.generator.js.fjsx15
//           ^ .punctuation.definition.template.parameters.begin.flowtype
//            ^ .entity.name.type.flowtype
//             ^ .punctuation.definition.template.parameters.flowtype
//              ^ .entity.name.type.flowtype
//               ^ .punctuation.definition.template.parameters.end.flowtype
//                ^ .punctuation.definition.function.parameters.begin.js.fjsx15
//                 ^^^^^ .entity.name.variable.js.fjsx15
//                      ^ .keyword.operator.other.association.flowtype
//                       ^ .entity.name.type.flowtype
//                        ^ .punctuation.definition.function.parameters.js.fjsx15
//                          ^^^ .keyword.operator.other.rest.js.fjsx15
//                             ^^^^^ .entity.name.variable.js.fjsx15
//                                  ^ .keyword.operator.other.association.flowtype
//                                   ^ .entity.name.type.flowtype
//                                    ^ .punctuation.definition.function.parameters.end.js.fjsx15
//                                     ^ .keyword.operator.other.association.flowtype
//                                      ^ .entity.name.type.flowtype
//                                        ^ .punctuation.definition.function.body.begin.js.fjsx15
//                                         ^ .punctuation.definition.function.body.end.js.fjsx15
