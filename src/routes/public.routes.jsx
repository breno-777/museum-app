import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../screens/Home";
import { Details } from "../screens/Details";
import { FullDetails } from "../screens/Details/fullDetails";
import { ArtistDetails } from "../screens/Details/artistDetails";
import { Explore } from "../screens/Explore";
import { ExploreArtists } from "../screens/Explore/ExploreArtists";
import { Gallery } from "../screens/Gallery";
import { SignIn } from "../screens/SignIn";
import { Settings } from "../screens/Settings";

const { Navigator, Screen } = createNativeStackNavigator();

export function PublicRoutes() {
  return (
    <Navigator initialRouteName="signIn" screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="details" component={Details} />
      <Screen name="fullDetails" component={FullDetails} />
      <Screen name="artistDetails" component={ArtistDetails} />
      <Screen name="explore" component={Explore} />
      <Screen name="exploreArtists" component={ExploreArtists} />
      <Screen name="gallery" component={Gallery} />
      <Screen name="settings" component={Settings} />
      <Screen name="signIn" component={SignIn} />
    </Navigator>
  );
}
