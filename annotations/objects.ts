const profile = {
  firstName: 'alex',
  age: 20,
  coord: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const { age, firstName }: { age: number; firstName: string } = profile;
const {
  coord: { lat, lng },
}: { coord: { lat: number; lng: number } } = profile;
