import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Blog } from './blog/blog';

export const routes: Routes = [
    {
        path:'', component:Blog
    }
];
