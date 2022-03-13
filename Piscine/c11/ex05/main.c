/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   main.c                                             :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: dohyulee <dohyulee@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/09/30 17:31:22 by dohyulee          #+#    #+#             */
/*   Updated: 2021/09/30 17:31:24 by dohyulee         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include "do_op.h"

int	get_mode(char *s)
{
	if (!ft_strcmp("+", s))
		return (0);
	if (!ft_strcmp("-", s))
		return (1);
	if (!ft_strcmp("*", s))
		return (2);
	if (!ft_strcmp("/", s))
		return (3);
	if (!ft_strcmp("%", s))
		return (4);
	else
		return (-1);
}

void	ft_error(int mode)
{
	if (mode == 3)
		write(1, "Stop : division by zero\n", 24);
	else
		write(1, "Stop : modulo by zero\n", 22);
}

int	main(int ac, char**av)
{
	int		mode;
	int		res;
	int		(*f[5])(int, int);

	f[0] = ft_add;
	f[1] = ft_sub;
	f[2] = ft_mul;
	f[3] = ft_div;
	f[4] = ft_modul;
	if (ac != 4)
		return (0);
	mode = get_mode(av[2]);
	if (mode == -1)
		write(1, "0\n", 2);
	else if (ft_atoi(av[3]) == 0 && (mode == 3 || mode == 4))
		ft_error(mode);
	else
	{
		res = f[mode](ft_atoi(av[1]), ft_atoi(av[3]));
		ft_putnbr(res);
		write(1, "\n", 1);
	}
	return (0);
}
