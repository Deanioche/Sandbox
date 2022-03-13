/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_sort_params.c                                   :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: dohyulee <dohyulee@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/09/23 20:40:46 by dohyulee          #+#    #+#             */
/*   Updated: 2021/09/23 20:56:37 by dohyulee         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include <unistd.h>

void	ft_putstr(char *str)
{
	int	i;

	i = 0;
	while (str[i] != '\0')
	{
		write(1, &str[i], 1);
		i++;
	}
	write(1, "\n", 1);
}

int	ft_strcmp(char *s1, char *s2)
{
	while (*s1 == *s2 && *s1)
	{
		s1++;
		s2++;
	}
	return (*s1 - *s2);
}

int	main(int ac, char **av)
{
	int		i;
	int		j;
	char	*tmp;

	i = 1;
	while (++i <= ac)
	{
		j = 1;
		while (++j <= ac - 1)
		{
			if (ft_strcmp(av[j], av[j - 1]) < 0)
			{
				tmp = av[j];
				av[j] = av[j - 1];
				av[j - 1] = tmp;
			}
		}
	}
	i = 0;
	while (++i < ac)
		ft_putstr(av[i]);
}
