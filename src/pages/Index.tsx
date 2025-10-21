import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const matchDate = new Date('2025-10-25T15:00:00');
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = matchDate.getTime() - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const activities = [
    {
      time: '13:00',
      title: 'Разминка команд',
      description: 'Открытая тренировка перед матчем',
      icon: 'Dumbbell',
      image: 'https://cdn.poehali.dev/projects/946524c0-080c-4efb-baad-5c78e5489c0d/files/f46017c4-7e44-47f6-a86a-89357b0acb91.jpg'
    },
    {
      time: '13:45',
      title: 'Автограф-сессия',
      description: 'Встреча с игроками обеих команд',
      icon: 'Pen',
      image: 'https://cdn.poehali.dev/projects/946524c0-080c-4efb-baad-5c78e5489c0d/files/ce67d8e1-3105-407c-a18a-bae850e4f9ac.jpg'
    },
    {
      time: '14:15',
      title: 'Фан-зона',
      description: 'Конкурсы, музыка и розыгрыши призов',
      icon: 'PartyPopper',
      image: 'https://cdn.poehali.dev/projects/946524c0-080c-4efb-baad-5c78e5489c0d/files/9c98d402-ea4a-4345-b635-ea802ee3dfd7.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <div 
        className="relative min-h-screen bg-cover bg-center bg-fixed"
        style={{ 
          backgroundImage: `linear-gradient(rgba(26, 31, 44, 0.85), rgba(26, 31, 44, 0.95)), url('https://cdn.poehali.dev/projects/946524c0-080c-4efb-baad-5c78e5489c0d/files/ce67d8e1-3105-407c-a18a-bae850e4f9ac.jpg')`
        }}
      >
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary pulse-glow">
              <Icon name="Trophy" size={16} className="mr-2" />
              PTL ACADEMY
            </Badge>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white tracking-tight">
              ЛЕГИОН <span className="text-primary">VS</span> ТИТАН
            </h1>
            
            <div className="flex items-center justify-center gap-4 text-lg md:text-xl text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <Icon name="Calendar" size={20} />
                <span>25 октября 2025</span>
              </div>
              <div className="w-1 h-1 bg-primary rounded-full"></div>
              <div className="flex items-center gap-2">
                <Icon name="Clock" size={20} />
                <span>15:00</span>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-12">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <Card key={unit} className="bg-card/50 backdrop-blur-sm border-primary/20">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                      {value.toString().padStart(2, '0')}
                    </div>
                    <div className="text-sm uppercase tracking-wider text-muted-foreground">
                      {unit === 'days' && 'Дней'}
                      {unit === 'hours' && 'Часов'}
                      {unit === 'minutes' && 'Минут'}
                      {unit === 'seconds' && 'Секунд'}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-3 text-white">
                PRE-MATCH АКТИВНОСТИ
              </h2>
              <p className="text-lg text-muted-foreground">
                Приходи пораньше и успей на все события!
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {activities.map((activity, index) => (
                <Card 
                  key={index} 
                  className="group overflow-hidden border-primary/30 bg-card/60 backdrop-blur-sm hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={activity.image} 
                      alt={activity.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-secondary text-secondary-foreground font-bold text-lg px-4 py-1">
                        {activity.time}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="bg-primary/20 p-2 rounded-lg">
                        <Icon name={activity.icon} size={24} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-white">
                          {activity.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {activity.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-gradient-to-r from-primary/20 to-secondary/20 border-primary/40 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <Icon name="MapPin" size={32} className="mx-auto mb-4 text-primary" />
                <h3 className="text-2xl font-bold mb-2 text-white">Место проведения</h3>
                <p className="text-lg text-muted-foreground mb-4">
                  Стадион PTL Academy
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Icon name="Ticket" size={18} className="text-primary" />
                    <span>Вход свободный</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Users" size={18} className="text-primary" />
                    <span>Для всех возрастов</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Camera" size={18} className="text-primary" />
                    <span>Фото и видео разрешены</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
