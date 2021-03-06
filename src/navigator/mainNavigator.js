import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList94770Navigator from '../features/ArticleList94770/navigator';
import ArticleList94769Navigator from '../features/ArticleList94769/navigator';
import ArticleList94768Navigator from '../features/ArticleList94768/navigator';
import BlankScreen7194767Navigator from '../features/BlankScreen7194767/navigator';
import UserProfile94757Navigator from '../features/UserProfile94757/navigator';
import Tutorial94756Navigator from '../features/Tutorial94756/navigator';
import NotificationList94728Navigator from '../features/NotificationList94728/navigator';
import Settings94727Navigator from '../features/Settings94727/navigator';
import Settings94719Navigator from '../features/Settings94719/navigator';
import UserProfile94717Navigator from '../features/UserProfile94717/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList94770: { screen: ArticleList94770Navigator },
ArticleList94769: { screen: ArticleList94769Navigator },
ArticleList94768: { screen: ArticleList94768Navigator },
BlankScreen7194767: { screen: BlankScreen7194767Navigator },
UserProfile94757: { screen: UserProfile94757Navigator },
Tutorial94756: { screen: Tutorial94756Navigator },
NotificationList94728: { screen: NotificationList94728Navigator },
Settings94727: { screen: Settings94727Navigator },
Settings94719: { screen: Settings94719Navigator },
UserProfile94717: { screen: UserProfile94717Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
