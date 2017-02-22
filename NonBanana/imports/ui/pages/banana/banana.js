import {Template} from 'meteor/templating';
import { Nomi } from '../../../api/nomi/nomi.js';
import './banana.html';

Template.banana.onCreated(function () {
  console.log('banana creata');
});

Template.banana.onRendered(function () {
  console.log('banana disegnata');
});

Template.banana.helpers({
  nomi: function () {
    return Nomi.find();
  },

  foo: function (s) {
    return "foo" + s;
  },
});

Template.banana.events({
  "click h1": function () {
    console.log('non mi toccare!');
  },
});
